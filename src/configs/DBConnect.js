import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGO_URI
const MONGODB_URI = "mongodb://localhost/test-exchangev2"

export const MONGODB_CONNECT = () => {
   console.log(MONGODB_URI)
   mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', function() {
      console.log("We are connected to mongoDB")
   });
}