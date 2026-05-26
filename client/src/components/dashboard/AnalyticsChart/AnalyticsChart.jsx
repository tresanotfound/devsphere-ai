import {

  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,

} from 'recharts';

const data = [

  {
    month: 'Jan',
    users: 400,
  },

  {
    month: 'Feb',
    users: 900,
  },

  {
    month: 'Mar',
    users: 700,
  },

  {
    month: 'Apr',
    users: 1200,
  },

  {
    month: 'May',
    users: 1500,
  },

];

function AnalyticsChart() {

  return (

    <div className="h-[350px]">

      <ResponsiveContainer>

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="colorUsers"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#b9ff66"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#b9ff66"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <XAxis
            dataKey="month"
            stroke="#aaa"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="users"
            stroke="#b9ff66"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;