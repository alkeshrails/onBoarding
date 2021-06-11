const { UserModel } = require('../models');

/*
--------------------------------
    API to fetch user data
-------------------------------
*/
const list = async (req, res) => {
  try {
    const data = await UserModel.findOne();
    return res.status(200).json({
      responseCode: 200,
      success: true,
      message: 'User data fetched successfully',
      data,
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

/*
-----------------------------
    API to update user data 
-----------------------------
*/
const update = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        username,
        firstName,
        lastName,
        email,
        phone,
        profile,
        bio,
        bgColor,
      },
    } = req;

    const data = await UserModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          username,
          firstName,
          lastName,
          email,
          phone,
          profile,
          bio,
          bgColor,
          updated: Date.now(),
        },
      },
      {
        runValidators: true,
      }
    );

    return res.status(200).json({
      responseCode: 200,
      success: true,
      message: 'User data updated successfully',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { list, update };
