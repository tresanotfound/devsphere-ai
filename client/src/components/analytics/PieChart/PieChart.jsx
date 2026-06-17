import { useEffect, useState } from "react";
import axios from "axios";

function PieChart() {
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/analytics`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAnalytics(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load analytics");
      }
    };

    fetchAnalytics();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-xl font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-[#111827] p-6 rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4">
        Pie Chart
      </h2>

      <pre>
        {JSON.stringify(analytics, null, 2)}
      </pre>
    </div>
  );
}

export default PieChart;