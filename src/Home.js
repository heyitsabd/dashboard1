
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
    { name: 'Group A', value: 400, color: '#0088FE' },
    { name: 'Group B', value: 300, color: '#00C49F' },
    { name: 'Group C', value: 300, color: '#FFBB28' },
    { name: 'Group D', value: 200, color: '#FF8042' },
  ];




export default function Home() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="color"
        label
      />
      <Tooltip />
    </PieChart>

  );
}
