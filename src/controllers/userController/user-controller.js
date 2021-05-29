import DBUser from '../../models/user.model';

//Utils
import { getByEmailOrUsername } from './utils';

class UserController {

   static readAll(req, res, next) {
      DBUser.find({})
         .then(users => res.status(200).json(users))
         .catch(err => console.log(err));
   };

   static readUser(req,res, next) {
      let { _id } = req.decoded; 
      DBUser.findOne({ _id })
         .then(user => res.status(200).json(user))
         .catch(err => console.log(err));
   };

   static createUser(req,res, next) {
      let { username, email, passwod } = req.body;
      DBUser.create({username, email, password})
         .then((user) => res.status(200).json({message: "Thank you for register", success_code: 1, status: 200}))
         .catch(err => res.status(500).json(err));
   };

   static async login(req,res,next) {
      let { name, password } = req.body;
      //Name can be a email / username
      //Find by username first
      try {
         let findUser = await getByEmailOrUsername(name, DBUser)
         findUser ? 
            res.status(200).json(findUser)
         :
            res.status(403).json({reason: "Invalid email or password", error_code: 1, status: 403});
      }catch (err) {
         res.status(500).json(err);
      }
   };

   static updateUser(req,res,next) {

   };

   static deleteUser(req,res,next) {

   };

};

export default UserController;