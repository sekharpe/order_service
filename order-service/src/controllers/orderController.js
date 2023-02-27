const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders
router.get('/', (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(orders);
    }
  });
});

// Get order by ID
router.get('/:id', (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) {
      res.status(500).send(err);
    } else if (!order) {
      res.status(404).send('Order not found');
    } else {
      res.send(order);
    }
  });
});

// Create new order
router.post('/', (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save((err, order) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(order);
    }
  });
});

// Update order by ID
router.put('/:id', (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, order) => {
    if (err) {
      res.status(500).send(err);
    } else if (!order) {
      res.status(404).send('Order not found');
    } else {
      res.send(order);
    }
  });
});

// Delete order by ID
router.delete('/:id', (req, res) => {
  Order.findByIdAndDelete(req.params.id, (err, order) => {
    if (err) {
      res.status(500).send(err);
    } else if (!order) {
      res.status(404).send('Order not found');
    } else {
      res.send(order);
    }
  });
});

module.exports = router;
