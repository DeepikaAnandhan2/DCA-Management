import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";

const data = [
  { name: "High", value: 22 },
  { name: "Medium", value: 43 },
  { name: "Low", value: 35 },
];

const COLORS = ["#f44336", "#ff9800", "#4caf50"];

export default function PriorityDonutChart() {
  return (
    <Paper sx={{ p: 3, height: 360, borderRadius: 3 }}>
      <Typography fontWeight={600} mb={2}>
        Case Distribution by Priority
      </Typography>

      <Box width="100%" height={280}>
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
      </Box>
    </Paper>
  );
}
