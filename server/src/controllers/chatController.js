// server/src/controllers/chatController.js

import Message
from "../models/Message.js";



/* =========================================
   SEND MESSAGE
========================================= */

export const sendMessage =
  async (req, res) => {

    try {

      const {

        receiver,
        message,

      } = req.body;



      // VALIDATION

      if (
        !receiver
        || !message
      ) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Receiver and message are required",
          });
      }



      // CREATE MESSAGE

      const newMessage =
        await Message.create({

          sender:
            req.user._id,

          receiver,

          message,
        });



      // POPULATE USER

      const populatedMessage =
        await Message.findById(

          newMessage._id
        )

        .populate(

          "sender",

          "name email avatar"
        )

        .populate(

          "receiver",

          "name email avatar"
        );



      res.status(201).json({

        success: true,

        message:
          populatedMessage,
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
   GET CHAT MESSAGES
========================================= */

export const getMessages =
  async (req, res) => {

    try {

      const {
        userId,
      } = req.params;



      // FIND CHAT

      const messages =
        await Message.find({

          $or: [

            {

              sender:
                req.user._id,

              receiver:
                userId,
            },

            {

              sender:
                userId,

              receiver:
                req.user._id,
            },
          ],
        })

        .sort({

          createdAt: 1,
        })

        .populate(

          "sender",

          "name avatar"
        )

        .populate(

          "receiver",

          "name avatar"
        );



      res.status(200).json({

        success: true,

        messages,
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
   GET CONVERSATIONS
========================================= */

export const getConversations =
  async (req, res) => {

    try {

      const userId =
        req.user._id;



      // GET ALL MESSAGES

      const messages =
        await Message.find({

          $or: [

            {
              sender:
                userId,
            },

            {
              receiver:
                userId,
            },
          ],
        })

        .populate(
          "sender",
          "name avatar email"
        )

        .populate(
          "receiver",
          "name avatar email"
        )

        .sort({
          createdAt: -1,
        });



      // UNIQUE CONVERSATIONS

      const conversationsMap =
        new Map();



      messages.forEach(

        (msg) => {

          const otherUser =

            msg.sender._id.toString()
            === userId.toString()

              ? msg.receiver

              : msg.sender;



          if (

            !conversationsMap.has(

              otherUser._id.toString()
            )

          ) {

            conversationsMap.set(

              otherUser._id.toString(),

              {

                user:
                  otherUser,

                lastMessage:
                  msg,

                unread:
                  !msg.read
                  &&
                  msg.receiver._id.toString()
                  === userId.toString(),
              }
            );
          }
        });




      const conversations =
        Array.from(

          conversationsMap.values()
        );



      res.status(200).json({

        success: true,

        conversations,
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
   MARK MESSAGE AS READ
========================================= */

export const markAsRead =
  async (req, res) => {

    try {

      const {
        messageId,
      } = req.params;



      const updatedMessage =
        await Message.findByIdAndUpdate(

          messageId,

          {

            read: true,
          },

          {

            new: true,
          }
        );



      res.status(200).json({

        success: true,

        message:
          updatedMessage,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };