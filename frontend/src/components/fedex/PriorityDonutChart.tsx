import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "High", value: 22 },
  { name: "Medium", value: 43 },
  { name: "Low", value: 35 },
];

const COLORS = ["#f44336", "#ff9800", "#4caf50"];

export default function PriorityDonutChart() {
  return (
    <div className="h-[360px] rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Title */}
      <h3 className="mb-4 text-sm font-semibold text-gray-800">
        Case Distribution by Priority
      </h3>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
