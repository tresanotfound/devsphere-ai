import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import BillingSettings from '../../components/settings/BillingSettings/BillingSettings';

function BillingPage() {

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
        Billing 💳
      </h1>

      <BillingSettings />

    </DashboardLayout>

  );
}

export default BillingPage;