import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import ChatSidebar from '../../components/chat/ChatSidebar/ChatSidebar';

import ChatWindow from '../../components/chat/ChatWindow/ChatWindow';

import OnlineUsers from '../../components/chat/OnlineUsers/OnlineUsers';

function ChatPage() {

  return (

    <DashboardLayout>

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-bold
            text-white
          "
        >
          Team Collaboration 💬
        </h1>

      </div>

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-4
          gap-8
        "
      >

        <ChatSidebar />

        <div className="xl:col-span-2">

          <ChatWindow />

        </div>

        <OnlineUsers />

      </div>

    </DashboardLayout>

  );
}

export default ChatPage;