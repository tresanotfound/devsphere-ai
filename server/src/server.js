// server/src/server.js

import dotenv from "dotenv";

dotenv.config();

import http from "http";

import mongoose from "mongoose";

import { Server }
from "socket.io";



/* ======================================
   APP
====================================== */

import app
from "./app.js";



/* ======================================
   CONFIG
====================================== */

import connectDB
from "./config/db.js";



/* ======================================
   SOCKET MODULES
====================================== */

import chatSocket
from "./sockets/chatSocket.js";

import notificationSocket
from "./sockets/notificationSocket.js";

import collaborationSocket
from "./sockets/collaborationSocket.js";



/* ======================================
   JOBS
====================================== */

import cleanupJob
from "./jobs/cleanupJob.js";

import analyticsJob
from "./jobs/analyticsJob.js";



/* ======================================
   DATABASE CONNECTION
====================================== */

connectDB();



/* ======================================
   CREATE HTTP SERVER
====================================== */

const server =
  http.createServer(app);



/* ======================================
   SOCKET.IO INITIALIZATION
====================================== */

const io =
  new Server(server, {

    cors: {

      origin:
        "http://localhost:5173",

      methods: [

        "GET",
        "POST",
      ],

      credentials: true,
    },
  });



/* ======================================
   SOCKET CONNECTION
====================================== */

io.on(

  "connection",

  (socket) => {

    console.log(
      "⚡ User Connected:",
      socket.id
    );



    /* ======================================
       SOCKET MODULES
    ====================================== */

    chatSocket(io, socket);

    notificationSocket(io, socket);

    collaborationSocket(io, socket);



    /* ======================================
       DISCONNECT
    ====================================== */

    socket.on(

      "disconnect",

      () => {

        console.log(
          "❌ User Disconnected:",
          socket.id
        );
      }
    );
  }
);



/* ======================================
   BACKGROUND JOBS
====================================== */

setInterval(

  cleanupJob,

  1000 * 60 * 60
);

setInterval(

  analyticsJob,

  1000 * 60 * 30
);



/* ======================================
   START SERVER
====================================== */

const PORT =
  process.env.PORT
  || 5000;

server.listen(

  PORT,

  () => {

    console.log(`
====================================
🚀 DevSphere AI Server Running
🌍 PORT: ${PORT}
====================================
`);
  }
);



/* ======================================
   MONGODB CONNECTION EVENTS
====================================== */

mongoose.connection.on(

  "connected",

  () => {

    console.log(
      "✅ MongoDB Connected"
    );
  }
);

mongoose.connection.on(

  "error",

  (err) => {

    console.log(
      `❌ MongoDB Error: ${err}`
    );
  }
);