// client/src/components/chat/Chat.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import ChatSidebar
from "./ChatSidebar/ChatSidebar";

import ChatWindow
from "./ChatWindow/ChatWindow";

import {
  socket,
} from "../../config/socketConfig";

import {
  useAuth,
} from "../../context/AuthContext";

function Chat() {

  const {
    user,
  } = useAuth();



  /* =========================================
     STATES
  ========================================= */

  const [
    conversations,
    setConversations,
  ] = useState([]);

  const [
    selectedUser,
    setSelectedUser,
  ] = useState(null);

  const [
    messages,
    setMessages,
  ] = useState([]);

  const [
    onlineUsers,
    setOnlineUsers,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);



  /* =========================================
     FETCH CONVERSATIONS
  ========================================= */

  const fetchConversations =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            "http://localhost:5000/api/chat/conversations",

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setConversations(

          response.data
            .conversations
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };



  /* =========================================
     FETCH MESSAGES
  ========================================= */

  const fetchMessages =
    async (userId) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            `http://localhost:5000/api/chat/messages/${userId}`,

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setMessages(
          response.data.messages
        );

      } catch (error) {

        console.error(error);
      }
    };



  /* =========================================
     SOCKET CONNECTION
  ========================================= */

  useEffect(() => {

    if (!user?._id)
      return;



    // CONNECT SOCKET

    socket.connect();



    // JOIN USER

    socket.emit(

      "join",

      user._id
    );



    // ONLINE USERS

    socket.on(

      "online-users",

      (users) => {

        setOnlineUsers(users);
      }
    );



    // RECEIVE MESSAGE

    socket.on(

      "receive-message",

      (message) => {

        setMessages(

          (prev) => [

            ...prev,
            message,
          ]
        );
      }
    );



    return () => {

      socket.off(
        "online-users"
      );

      socket.off(
        "receive-message"
      );

      socket.disconnect();
    };

  }, [user]);



  /* =========================================
     INITIAL LOAD
  ========================================= */

  useEffect(() => {

    fetchConversations();

  }, []);



  /* =========================================
     SELECT USER
  ========================================= */

  const handleSelectUser =
    async (conversation) => {

      setSelectedUser(
        conversation.user
      );

      await fetchMessages(

        conversation.user._id
      );
    };



  /* =========================================
     SEND MESSAGE
  ========================================= */

  const handleSendMessage =
    (text) => {

      if (
        !text.trim()
        || !selectedUser
      ) return;



      const messageData = {

        sender:
          user._id,

        receiver:
          selectedUser._id,

        message:
          text,
      };



      // SOCKET SEND

      socket.emit(

        "send-message",

        messageData
      );



      // LOCAL UPDATE

      setMessages(

        (prev) => [

          ...prev,

          {

            ...messageData,

            sender: user,

            receiver:
              selectedUser,

            createdAt:
              new Date(),
          },
        ]
      );
    };



  /* =========================================
     LOADING
  ========================================= */

  if (loading) {

    return (

      <DashboardLayout>

        <div
          className="
            flex
            items-center
            justify-center
            h-[70vh]
          "
        >

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Loading Chat...
          </h1>

        </div>

      </DashboardLayout>
    );
  }



  return (

    <DashboardLayout>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[350px_1fr]
          gap-6
          h-[85vh]
        "
      >

        {/* SIDEBAR */}

        <ChatSidebar

          conversations={
            conversations
          }

          selectedUser={
            selectedUser
          }

          onSelectUser={
            handleSelectUser
          }

          onlineUsers={
            onlineUsers
          }
        />



        {/* CHAT WINDOW */}

        <ChatWindow

          selectedUser={
            selectedUser
          }

          messages={
            messages
          }

          onSendMessage={
            handleSendMessage
          }

          currentUser={user}

          onlineUsers={
            onlineUsers
          }
        />

      </div>

    </DashboardLayout>
  );
}

export default Chat;