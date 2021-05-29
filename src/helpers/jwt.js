import jwt from 'jsonwebtoken';

const SECRET_CODE = "SECRET_CODE";

export const generateToken = (payload) => {
   return jwt.sign(payload, SECRET_CODE);
};

export const verifyToken = (token) => {
   return jwt.verify(token, SECRET_CODE);
};

