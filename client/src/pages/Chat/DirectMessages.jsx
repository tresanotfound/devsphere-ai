import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

function DirectMessages() {

  return (

    <DashboardLayout>

      <div
        className="
          bg-gray-900
          border
          border-gray-800
          rounded-2xl
          p-8
        "
      >

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Direct Messages 📩
        </h1>

        <p className="text-gray-400 mt-5">
          Private team conversations appear here.
        </p>

      </div>

    </DashboardLayout>

  );
}

export default DirectMessages;