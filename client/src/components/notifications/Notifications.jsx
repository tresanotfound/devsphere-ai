// client/src/components/notifications/Notifications.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import NotificationCard
from "./NotificationCard";

import {
  socket,
} from "../../config/socketConfig";

import {
  useAuth,
} from "../../context/AuthContext";

function Notifications() {

  const {
    user,
  } = useAuth();



  /* =========================================
     STATES
  ========================================= */

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);



  /* =========================================
     FETCH NOTIFICATIONS
  ========================================= */

  const fetchNotifications =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            `\${import.meta.env.VITE_API_URL}/api/notifications`,

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setNotifications(

          response.data
            .notifications
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };



  /* =========================================
     SOCKET CONNECTION
  ========================================= */

  useEffect(() => {

    if (!user?._id)
      return;



    socket.connect();



    socket.emit(

      "register-notification-user",

      user._id
    );



    socket.on(

      "receive-notification",

      (notification) => {

        setNotifications(

          (prev) => [

            notification,
            ...prev,
          ]
        );
      }
    );



    return () => {

      socket.off(
        "receive-notification"
      );
    };

  }, [user]);



  /* =========================================
     INITIAL LOAD
  ========================================= */

  useEffect(() => {

    fetchNotifications();

  }, []);



  /* =========================================
     MARK AS READ
  ========================================= */

  const handleMarkAsRead =
    async (notificationId) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.put(

          `\${import.meta.env.VITE_API_URL}/api/notifications/read/${notificationId}`,

          {},

          {

            headers: {

              Authorization:
                `Bearer ${token}`,
            },
          }
        );



        setNotifications(

          (prev) =>

            prev.map(

              (notification) =>

                notification._id
                === notificationId

                  ? {

                      ...notification,

                      read: true,
                    }

                  : notification
            )
        );



        socket.emit(

          "mark-notification-read",

          notificationId
        );

      } catch (error) {

        console.error(error);
      }
    };



  /* =========================================
     DELETE NOTIFICATION
  ========================================= */

  const handleDelete =
    async (notificationId) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `\${import.meta.env.VITE_API_URL}/api/notifications/${notificationId}`,

          {

            headers: {

              Authorization:
                `Bearer ${token}`,
            },
          }
        );



        setNotifications(

          (prev) =>

            prev.filter(

              (notification) =>

                notification._id
                !== notificationId
            )
        );

      } catch (error) {

        console.error(error);
      }
    };



  /* =========================================
     MARK ALL AS READ
  ========================================= */

  const handleMarkAll =
    async () => {

      const unreadNotifications =

        notifications.filter(

          (notification) =>

            !notification.read
        );



      for (

        const notification
        of unreadNotifications

      ) {

        await handleMarkAsRead(

          notification._id
        );
      }
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
            Loading Notifications...
          </h1>

        </div>

      </DashboardLayout>
    );
  }



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          mb-10
        "
      >

        <div>

          <h1
            className="
              text-5xl
              font-extrabold
              text-black
              dark:text-white
            "
          >
            Notifications 🔔
          </h1>

          <p
            className="
              mt-3
              text-lg
              text-gray-600
              dark:text-gray-400
            "
          >
            Realtime workspace activity
            and collaboration updates.
          </p>

        </div>



        {/* ACTION */}

        <button

          onClick={handleMarkAll}

          className="
            px-6
            py-3
            rounded-2xl
            bg-[#b9ff66]
            text-black
            font-bold
            hover:scale-105
            transition
          "
        >
          Mark All As Read
        </button>

      </div>



      {/* EMPTY */}

      {

        notifications.length === 0

        && (

          <div
            className="
              glass-card
              rounded-3xl
              p-16
              text-center
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-black
                dark:text-white
              "
            >
              No Notifications Yet 🚀
            </h2>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-400
              "
            >
              Your workspace activity
              will appear here.
            </p>

          </div>
        )
      }



      {/* LIST */}

      <div
        className="
          flex
          flex-col
          gap-6
        "
      >

        {

          notifications.map(

            (notification) => (

              <NotificationCard

                key={
                  notification._id
                }

                notification={
                  notification
                }

                onMarkAsRead={
                  handleMarkAsRead
                }

                onDelete={
                  handleDelete
                }
              />
            ))
        }

      </div>

    </DashboardLayout>
  );
}

export default Notifications;