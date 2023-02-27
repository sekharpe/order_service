const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number,
  price: Number,
  orderDate: Date,
  deliveryDate: Date,
  address: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
