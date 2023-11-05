const rooms = [
    {
      _id: '653ea558330491e4c131cff8',
      name: 'Beautiful Villa',
      description: 'A spacious villa with a pool and a garden.',
      price: 2500,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/107804/medium/55cdc62e9f93517c.jpg'
    },
    {
      _id: '653ea558330491e4c131cff9',
      name: 'Cozy Cabin',
      description: 'A cozy cabin in the woods with a fireplace.',
      price: 1500,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/107336/medium/d613e6dc5124f50f.jpg'
    },
    {
      _id: '653ea558330491e4c131cffa',
      name: 'City View Penthouse',
      description: 'A luxurious penthouse with a stunning city view.',
      price: 3500,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/61119/medium/f4854ff6634055fa.jpg'
    },
    {
      _id: '653ea558330491e4c131cffb',
      name: 'Riverside View Apartment',
      description: 'An apartment with a stunning view of the river.',
      price: 2000,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/18704/medium/82cc025be83b335b.jpg'
    },
    {
      _id: '653ea558330491e4c131cffc',
      name: 'Downtown Loft',
      description: 'A modern loft in the heart of the city.',
      price: 1800,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/18503/medium/d1fe8fb29336de77.jpg'
    },
    {
      _id: '653ea558330491e4c131cffd',
      name: 'Garden Cottage',
      description: 'A peaceful cottage with a beautiful garden.',
      price: 1200,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/109222/medium/5136795e2bde603c.jpg'
    },
    {
      _id: '653ea558330491e4c131cffe',
      name: 'Seaside Bungalow',
      description: 'A charming bungalow by the sea with a private beach.',
      price: 2800,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/191410/medium/ritterbcxqkx.jpg'
    },
    {
      _id: '653ea558330491e4c131cfff',
      name: 'Mountain Chalet',
      description: 'A cozy chalet nestled in the mountains with a hot tub.',
      price: 1900,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/196490/medium/133acd3d13f46ed9.jpg'
    },
    {
      _id: '653ea558330491e4c131d000',
      name: 'Historic Manor',
      description: 'An elegant historic manor with a grand ballroom.',
      price: 4000,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/195971/medium/a826d0613d48d9bf.jpg'
    },
    {
      _id: '653ea558330491e4c131d001',
      name: 'Lakeview Cabin',
      description: 'A rustic cabin with a beautiful view of the lake.',
      price: 1700,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/105025/medium/f0a05d6995991edb.jpg'
    },
    {
      _id: '653ea558330491e4c131d002',
      name: 'Urban Studio',
      description: 'A stylish urban studio apartment in the city center.',
      price: 1500,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/107180/medium/65b21dc6d65c8f0c.jpg'
    },
    {
      _id: '653ea558330491e4c131d003',
      name: 'Tropical Retreat',
      description: 'A luxurious retreat in a tropical paradise with a private pool.',
      price: 3200,
      imageUrl: 'https://images.oyoroomscdn.com/uploads/hotel_image/47201/medium/752a1264c6ea24d4.jpg'
    }
  ];
  
  
  // Filter rooms in different price ranges
  const rooms1000to2000 = rooms.filter(room => room.price >= 1000 && room.price <= 2000);
  const rooms2000to3000 = rooms.filter(room => room.price > 2000 && room.price <= 3000);
  const rooms3000to4000 = rooms.filter(room => room.price > 3000 && room.price <= 4000);
  
  console.log('Rooms in the price range 1000-2000:', rooms1000to2000);
  console.log('Rooms in the price range 2000-3000:', rooms2000to3000);
  console.log('Rooms in the price range 3000-4000:', rooms3000to4000);
  