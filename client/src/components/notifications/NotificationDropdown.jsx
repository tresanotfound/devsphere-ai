// client/src/components/notifications/NotificationDropdown.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  socket,
} from "../../config/socketConfig";

import {
  useAuth,
} from "../../context/AuthContext";

function NotificationDropdown({

  open,

}) {

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
    unreadCount,
    setUnreadCount,
  ] = useState(0);

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
     FETCH UNREAD COUNT
  ========================================= */

  const fetchUnreadCount =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            `\${import.meta.env.VITE_API_URL}/api/notifications/unread-count`,

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setUnreadCount(

          response.data
            .unreadCount
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



    socket.connect();



    // REGISTER USER

    socket.emit(

      "register-notification-user",

      user._id
    );



    // RECEIVE NOTIFICATION

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



    // UNREAD COUNT

    socket.on(

      "notification-unread-count",

      (count) => {

        setUnreadCount(count);
      }
    );



    return () => {

      socket.off(
        "receive-notification"
      );

      socket.off(
        "notification-unread-count"
      );
    };

  }, [user]);



  /* =========================================
     INITIAL LOAD
  ========================================= */

  useEffect(() => {

    fetchNotifications();

    fetchUnreadCount();

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



        // UPDATE UI

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



        // UPDATE COUNT

        setUnreadCount(

          (prev) =>

            prev > 0

              ? prev - 1

              : 0
        );



        // SOCKET UPDATE

        socket.emit(

          "mark-notification-read",

          notificationId
        );

      } catch (error) {

        console.error(error);
      }
    };



  /* =========================================
     CLOSED
  ========================================= */

  if (!open)
    return null;



  return (

    <div
      className="
        absolute
        top-20
        right-0
        w-[420px]
        max-h-[550px]
        overflow-y-auto
        glass-card
        rounded-3xl
        p-6
        z-50
        border
        border-black/10
        dark:border-white/10
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-black
              dark:text-white
            "
          >
            Notifications 🔔
          </h2>

          <p
            className="
              mt-1
              text-gray-600
              dark:text-gray-400
            "
          >
            Realtime workspace updates
          </p>

        </div>



        {/* UNREAD */}

        <div
          className="
            w-10
            h-10
            rounded-2xl
            bg-[#b9ff66]
            text-black
            flex
            items-center
            justify-center
            font-bold
          "
        >
          {unreadCount}
        </div>

      </div>



      {/* LOADING */}

      {

        loading

        && (

          <div
            className="
              py-10
              text-center
            "
          >

            <p
              className="
                text-gray-500
              "
            >
              Loading notifications...
            </p>

          </div>
        )
      }



      {/* EMPTY */}

      {

        !loading

        && notifications.length === 0

        && (

          <div
            className="
              py-12
              text-center
            "
          >

            <p
              className="
                text-gray-500
              "
            >
              No notifications yet 🚀
            </p>

          </div>
        )
      }



      {/* LIST */}

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {

          notifications.map(

            (notification) => (

              <button

                key={
                  notification._id
                }

                onClick={() =>

                  handleMarkAsRead(

                    notification._id
                  )
                }

                className={`
                  text-left
                  p-5
                  rounded-2xl
                  border
                  transition

                  ${

                    notification.read

                      ? `
                        bg-black/5
                        dark:bg-white/5
                        border-black/10
                        dark:border-white/10
                      `

                      : `
                        bg-[#b9ff66]/10
                        border-[#b9ff66]
                      `
                  }
                `}
              >

                {/* TITLE */}

                <h3
                  className="
                    font-bold
                    text-black
                    dark:text-white
                  "
                >
                  {
                    notification.title
                  }
                </h3>



                {/* MESSAGE */}

                <p
                  className="
                    mt-2
                    text-sm
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {
                    notification.message
                  }
                </p>



                {/* TIME */}

                <p
                  className="
                    mt-3
                    text-xs
                    text-gray-500
                  "
                >

                  {

                    new Date(

                      notification.createdAt
                    ).toLocaleString()
                  }

                </p>

              </button>
            ))
        }

      </div>

    </div>
  );
}

export default NotificationDropdown;