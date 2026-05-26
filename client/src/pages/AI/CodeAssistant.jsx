import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import CodeGenerator from '../../components/ai/CodeGenerator/CodeGenerator';

function CodeAssistant() {

  return (

    <DashboardLayout>

      <h1
        className="
          text-5xl
          font-bold
          text-white
          mb-10
        "
      >
        Code Assistant 💻
      </h1>

      <CodeGenerator />

    </DashboardLayout>

  );
}

export default CodeAssistant;