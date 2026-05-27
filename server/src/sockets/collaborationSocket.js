// ======================================
// COLLABORATION SOCKET
// ======================================

const collaborationSocket =
  (io) => {

    io.on(
      "connection",
      (socket) => {

        console.log(
          `🤝 Collaboration User Connected: ${socket.id}`
        );

        // JOIN WORKSPACE

        socket.on(
          "joinWorkspace",
          (workspaceId) => {

            socket.join(
              workspaceId
            );

            console.log(
              `📥 Joined Workspace: ${workspaceId}`
            );
          }
        );

        // TASK UPDATE

        socket.on(
          "taskUpdated",
          (taskData) => {

            io.to(
              taskData.workspaceId
            ).emit(
              "workspaceTaskUpdated",
              taskData
            );
          }
        );

        // PROJECT UPDATE

        socket.on(
          "projectUpdated",
          (projectData) => {

            io.to(
              projectData.workspaceId
            ).emit(
              "workspaceProjectUpdated",
              projectData
            );
          }
        );

        // DISCONNECT

        socket.on(
          "disconnect",
          () => {

            console.log(
              `❌ Collaboration User Disconnected: ${socket.id}`
            );
          }
        );

      }
    );
  };

export default collaborationSocket;