import dayjs from 'dayjs';
import React from 'react';
import {
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Line,
  CartesianGrid,
} from 'recharts';
import { Tview } from '../../../containers/Statistics/reducer';
import CustomizedTooltip from './CustomizedTooltip';

interface LineBarChartProps {
  data: Tview[];
}

function LineBarChart({ data }: LineBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis
          dataKey="month"
          tickFormatter={month => `${dayjs(month).format('M')}월`}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomizedTooltip />} />
        <Bar dataKey="count" fill="#2b6bff" radius={[10, 10, 10, 10]} />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#b2b2b2"
          yAxisId="right"
          strokeWidth="2"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default LineBarChart;
