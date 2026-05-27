// client/src/components/analytics/Analytics.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import StatsCard
from "./StatsCard/StatsCard";

import BarChart
from "./BarChart/BarChart";

import LineChart
from "./LineChart/LineChart";

import PieChart
from "./PieChart/PieChart";

function Analytics() {

  const [
    analytics,
    setAnalytics,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);



  /* =========================================
     FETCH ANALYTICS
  ========================================= */

  const fetchAnalytics =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            "http://localhost:5000/api/analytics/dashboard",

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setAnalytics(
          response.data.analytics
        );

      } catch (error) {

        console.error(
          error
        );

      } finally {

        setLoading(false);
      }
    };



  useEffect(() => {

    fetchAnalytics();

  }, []);



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
            Loading Analytics...
          </h1>

        </div>

      </DashboardLayout>
    );
  }



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Analytics 📊
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-gray-600
            dark:text-gray-400
          "
        >
          Real-time productivity insights
          from your workspace.
        </p>

      </div>



      {/* STATS */}

      <StatsCard
        analytics={analytics}
      />



      {/* CHARTS */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
          mt-10
        "
      >

        <BarChart
          analytics={analytics}
        />

        <PieChart
          analytics={analytics}
        />

      </div>



      {/* PRODUCTIVITY GRAPH */}

      <div className="mt-10">

        <LineChart
          analytics={analytics}
        />

      </div>

    </DashboardLayout>
  );
}

export default Analytics;