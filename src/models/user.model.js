import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: [true, "Username cannot be empty"],
   },
   email: {
      type: String,
      requried: [true, "Email cannot be empty"]
   },
   password: {
      type: String,
      requried: [true, "Password cannot be empty"]
   }
})


const user = mongoose.model("User", userSchema);

export default user;