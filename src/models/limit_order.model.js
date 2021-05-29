import mongoose from 'mongoose';

const limiOrderSchema = new mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   limit_price: {
      type: Number,
      required: [true, "Price cannot be empty"]
   },
   from_symbol: {
      type: String, 
      required: [true, "FromSymbol cannot be empty"]
   },
   to_symbol: {
      type: String,
      required: [true, "ToSymbol cannot be empty"]
   },
   order_type: {
      type: String,
      required: [true, "Order type cannot be empty"]
   }
})

const limitOrder = mongoose.model("LimitOrder", limiOrderSchema);

export default limiOrder;