import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";

const Graphs = () => {
    const data = [
        {
          name: 'Boots',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Formal Shoe',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Casual Shoe',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Loafers',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
      ];
    return (
        <div>
            <LineChart className="text-white" width={450} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
  <XAxis dataKey="name" className="text-white" />
  <Tooltip />
  <CartesianGrid stroke="white" />
  <Line className="text-white" type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" className="text-white" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
        </div>
    );
};

export default Graphs;