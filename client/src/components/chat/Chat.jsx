import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import OnlineUsers from "./OnlineUsers/OnlineUsers";

function Chat() {

  return (

    <DashboardLayout>

      <div className="flex h-[85vh]">

        <ChatSidebar />

        <div className="flex-1 flex flex-col">

          <ChatWindow />

        </div>

        <OnlineUsers />

      </div>

    </DashboardLayout>
  );
}

export default Chat;