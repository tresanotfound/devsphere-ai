import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import AIChat from '../../components/ai/AIChat/AIChat';

import AISuggestions from '../../components/ai/AISuggestions/AISuggestions';

function AIWorkspace() {

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
          AI Workspace 🤖
        </h1>

        <p className="text-gray-400 mt-3">
          Interact with DevSphere AI assistant.
        </p>

      </div>

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
        "
      >

        <AIChat />

        <AISuggestions />

      </div>

    </DashboardLayout>

  );
}

export default AIWorkspace;