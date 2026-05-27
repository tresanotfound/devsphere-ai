import Notification
from "../models/Notification.js";


// ======================================
// CREATE NOTIFICATION
// ======================================

export const createNotification =
  async (notificationData) => {

    return await Notification.create(
      notificationData
    );
  };


// ======================================
// GET USER NOTIFICATIONS
// ======================================

export const fetchNotifications =
  async (userId) => {

    return await Notification.find({

      user: userId,

    }).sort({

      createdAt: -1,

    });
  };