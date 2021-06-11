const { UserModel } = require('../models');

/*
--------------------------------
    Function to add user data
-------------------------------
*/
const addUser = async () => {
  try {
    const checkUser = await UserModel.findOne();

    if (checkUser) {
      return console.log('User already exist');
    }

    const data = {
      username: process.env.USER_NAME,
      firstName: process.env.FIRST_NAME,
      lastName: process.env.LAST_NAME,
      email: process.env.EMAIL,
      phone: process.env.PHONE,
      bio: process.env.BIO,
      profile: process.env.PROFILE,
      bgColor: process.env.BG,
    };

    await UserModel.create(data);

    return console.log('user created successfully');
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { addUser };
