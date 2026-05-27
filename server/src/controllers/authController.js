import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


// REGISTER USER
export const registerUser = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

    // CHECK USER
    const userExists =
      await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    }

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({

      success: true,

      token: generateToken(user._id),

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// LOGIN USER
export const loginUser = async (
  req,
  res
) => {

  try {

    const {
      email,
      password,
    } = req.body;

    // FIND USER
    const user =
      await User.findOne({ email });

    if (
      user &&
      (await user.matchPassword(password))
    ) {

      res.json({

        success: true,

        token: generateToken(user._id),

        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },

      });

    } else {

      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });

    }

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// GET CURRENT USER
export const getMe = async (
  req,
  res
) => {

  res.json({
    success: true,
    user: req.user,
  });

};