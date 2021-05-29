import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   balance: {
      type: Number,
      default: 0,
   },
})

   //  "@babel/cli": "^7.13.16",
   //  "@babel/core": "^7.14.2",
   //  "@babel/node": "^7.14.2",
   //  "@babel/preset-env": "^7.14.2",
   //  "babel-cli": "^6.26.0",
   //  "babel-preset-env": "^1.7.0",

