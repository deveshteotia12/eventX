require('dotenv').config();

export default {
  port: parseInt(process.env.PORT) || 5000,
  databaseURL: process.env.MONGO_URl,
  secretJWT: process.env.JWT_SECRET,
};
