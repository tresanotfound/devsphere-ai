// server/src/controllers/notificationController.js

import Notification
from "../models/Notification.js";



/* =========================================
   GET NOTIFICATIONS
========================================= */

export const getNotifications =
  async (req, res) => {

    try {

      const notifications =
        await Notification.find({

          recipient:
            req.user._id,
        })

        .populate(

          "sender",

          "name avatar"
        )

        .sort({

          createdAt: -1,
        });



      res.status(200).json({

        success: true,

        notifications,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };



/* =========================================
   MARK AS READ
========================================= */

export const markAsRead =
  async (req, res) => {

    try {

      const {
        notificationId,
      } = req.params;



      const notification =
        await Notification.findByIdAndUpdate(

          notificationId,

          {

            read: true,
          },

          {

            new: true,
          }
        );



      if (!notification) {

        return res.status(404)
          .json({

            success: false,

            message:
              "Notification not found",
          });
      }



      res.status(200).json({

        success: true,

        notification,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };



/* =========================================
   DELETE NOTIFICATION
========================================= */

export const deleteNotification =
  async (req, res) => {

    try {

      const {
        notificationId,
      } = req.params;



      const notification =
        await Notification.findByIdAndDelete(

          notificationId
        );



      if (!notification) {

        return res.status(404)
          .json({

            success: false,

            message:
              "Notification not found",
          });
      }



      res.status(200).json({

        success: true,

        message:
          "Notification deleted",
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };



/* =========================================
   UNREAD COUNT
========================================= */

export const getUnreadCount =
  async (req, res) => {

    try {

      const count =
        await Notification.countDocuments({

          recipient:
            req.user._id,

          read: false,
        });



      res.status(200).json({

        success: true,

        unreadCount:
          count,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };