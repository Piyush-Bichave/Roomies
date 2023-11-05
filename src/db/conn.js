const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://piyushbichave:Piyush123@cluster0.zhsfrds.mongodb.net/roomRegistration", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`No Connection ${e}`);
})