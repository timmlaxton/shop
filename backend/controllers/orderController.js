import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// Create New Order
// POST / api/orders
// Private
const addOrderItems = asyncHandler (async (req, res) => {
  const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = await Product.find({})

if(orderItems && orderItems.length ===0) {
  res.status(400)
  throw new error('No new items')
  return
} else {
  const order = new Order({
    orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice 
  })

  const createdOrder = await order.save()

  res.status(201).json(createdOrder)
}
})

export {addOrderItems}