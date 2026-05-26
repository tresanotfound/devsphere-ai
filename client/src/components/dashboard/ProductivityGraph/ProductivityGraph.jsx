import {

  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,

} from 'recharts';

const data = [

  {
    day: 'Mon',
    productivity: 70,
  },

  {
    day: 'Tue',
    productivity: 90,
  },

  {
    day: 'Wed',
    productivity: 65,
  },

  {
    day: 'Thu',
    productivity: 95,
  },

  {
    day: 'Fri',
    productivity: 88,
  },

];

function ProductivityGraph() {

  return (

    <div className="h-[350px]">

      <ResponsiveContainer>

        <BarChart data={data}>

          <XAxis
            dataKey="day"
            stroke="#aaa"
          />

          <Tooltip />

          <Bar
            dataKey="productivity"
            fill="#b9ff66"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ProductivityGraph;