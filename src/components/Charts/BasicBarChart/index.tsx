import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import CustomizedTooltip from './CustomizedTooltip';

function BasicBarChart({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis dataKey="actor" tickLine={false} axisLine={false} />
        <Tooltip content={<CustomizedTooltip />} />
        <Bar dataKey="count" fill="#2b6bff" radius={[10, 10, 10, 10]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BasicBarChart;
