import { verifyToken } from '../helpers/jwt';
import DBUser from '../models/user.model';

export const Authentication = (req,res,next) => {
   let { access_token } = req.headers
   if (access_token) {
      let decoded = verifyToken(access_token);
      req.decoded = decoded;
      next();
   }else {
      next({reason: "Unauthenticated", error_code: 2, status: 400});
   }
};

export const Authorization = async (req,res,next) => {
   let { access_token } = req.headers;
   let { user_id } = req.body;
   if (access_token) {
      let { _id } = verifyToken(access_token);
      let findUser = DBUser.findOne({_id});
      if (user_id === findUser.id) {
         next();
      }else {
         next({reason: "Don't have authority", error_code: 3, status: 400});
      }
   }else {
      next({reason: "Unauthenticated", error_code: 2, status: 400});
   }
}
