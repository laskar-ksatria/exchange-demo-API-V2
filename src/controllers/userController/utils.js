export const getByEmailOrUsername = async (name, db) => {
   let userByUsername = await db.findOne({username: name})
   if (userByUsername) return userByUsername
   let userByEmail = await db.findOne({email: name})
   if (userByEmail) return userByEmail;
   return null;
}