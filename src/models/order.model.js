import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   price: {
      type: Number,
      required: [true, "Price cannot be empty"]
   },
   order_type: {
      type: String,
      required: [true, "Order type cannot be empty"]
   },
   from_symbol: {
      type: String,
      required: [true, "FromSymbol cannot be mepty"]
   },
   to_symbol: {
      type: String, 
      required: [true, "ToSymbol cannot be empty"]
   },
})

const Order = mongoose.model("Order", orderSchema);

export default Order;