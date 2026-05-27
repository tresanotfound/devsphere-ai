import User from "../models/User.js";


// ======================================
// GET ALL USERS
// ======================================

export const fetchUsers =
  async () => {

    return await User.find()
      .select("-password");
  };


// ======================================
// GET USER BY ID
// ======================================

export const fetchUserById =
  async (id) => {

    return await User.findById(id)
      .select("-password");
  };