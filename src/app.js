const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const bcrypt = require("bcrypt");
const mailSender = require("./utils/mailSender");
const path = require("path");
const otpGenerator = require("otp-generator");

require("dotenv").config();

// Import models and database connection
const Register = require("./models/registers");
const Room = require("./models/rooms");
const UserSelection = require("./models/userSelection");

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.use(
  session({
    secret: "jdhhd56hsj543ffs",
    resave: false,
    saveUninitialized: false,
  })
);

const otpStorage = {
  _otp: '', 

  get otp() {
    return this._otp;
  },

  set otp(newOTP) {
    this._otp = newOTP;
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/otpVerification", (req, res) => {
  res.render("otpVerification");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/filter", async (req, res) => {
  const { max, min, all } = req.query; 
  let query = {};

  if (min && max) {
    const minPrice = parseInt(min);
    const maxPrice = parseInt(max);
    query = { price: { $gte: minPrice, $lte: maxPrice } };
  }

  try {
    const rooms = await Room.find(query);
    res.render("student", { rooms });
  } catch (err) {
    console.error(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, phoneNumber, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const registerEmployee = new Register({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, upperCase: false, specialChars: false });
    otpStorage.otp = otp;
    console.log(otpStorage.otp);
    await registerEmployee.save();

    const emailBody = `Your One Time Password (OTP) is ${otp}`;
    await mailSender(email, "Verification Mail", emailBody);

    req.session.user = registerEmployee;

    res.status(201).redirect("/otpVerification");
  } catch (error) {
    res.status(400).render("register", {
      alert: "Something Went Wrong or User Already Exists",
    });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Register.findOne({ email: username });
    if (!user) {
      return res.status(400).render("login", {
        alert: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).render("login", {
        alert: "Invalid username or password",
      });
    }

    req.session.user = user;

    res.redirect("/student");
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { otp } = req.body;
  if (otp === otpStorage.otp) {
    return res.status(201).render("login", {
      alert: "Registration Successful",
    });
  } else {
    return res.status(400).render("otpVerification", {
      alert: "Invalid OTP",
    });
  }
});

app.get("/student", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.render("student", { UserData: req.session.user, rooms });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/room-selection", async (req, res) => {
  try {
    const { roomId } = req.body;
    const selectedRoom = await Room.findById(roomId);
    const { name, description, price } = selectedRoom;
    const userSelection = new UserSelection({
      username: req.session.user.name,
      phoneNumber: req.session.user.phoneNumber,
      roomname: name,
      description,
      price,
    });
    await userSelection.save();
    res.status(200).json({ message: "User selection saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/login");
  });
});

const URL = process.env.MONGO_URL;
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running at port number ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
