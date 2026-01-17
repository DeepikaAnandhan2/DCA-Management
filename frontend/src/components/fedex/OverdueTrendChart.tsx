import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 130 },
  { day: "Wed", value: 145 },
  { day: "Thu", value: 138 },
  { day: "Fri", value: 160 },
  { day: "Sat", value: 150 },
  { day: "Sun", value: 158 },
];

export default function OverdueTrendChart() {
  return (
    <div className="h-[360px] rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Title */}
      <h3 className="mb-4 text-sm font-semibold text-gray-800">
        Overdue Trend (Last 7 Days)
      </h3>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4b2db3"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
