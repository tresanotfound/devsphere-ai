import bcrypt from "bcryptjs";

import User from "../models/User.js";


// ======================================
// HASH PASSWORD
// ======================================

export const hashPassword =
  async (password) => {

    const salt =
      await bcrypt.genSalt(10);

    return await bcrypt.hash(
      password,
      salt
    );
  };


// ======================================
// COMPARE PASSWORD
// ======================================

export const comparePassword =
  async (
    enteredPassword,
    storedPassword
  ) => {

    return await bcrypt.compare(
      enteredPassword,
      storedPassword
    );
  };


// ======================================
// FIND USER BY EMAIL
// ======================================

export const findUserByEmail =
  async (email) => {

    return await User.findOne({
      email,
    });
  };