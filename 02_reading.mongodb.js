use("ecommerce");

// db.products.find({ "name": "Wireless Mouse" })

// db.products.find({ category: "Electronics" })

// db.products.find({ price: { $gt: 1000 } })

//Greater than 1000 and less than 50000
// db.products.find({ price: { $gte: 1000, $lte: 50000 } })

//Category Electronics Or Stock less than 50
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

//To show products name and price not id else id gets selected by default
db.products.find({}, { name: 1, price: 1, _id: 0 })

// db.products.find().sort({ price: -1 }).skip(1).limit(1)