import bcr from 'bcryptjs';

export const hashingPassword = (password) => {
   let salt = bcr.genSaltSync(10);
   return bcr.hashSync(password, salt);
};

export const comparePassword = (password, hashPassword) => {
   return (bcr.compareSync(password, hashPassword))
};
