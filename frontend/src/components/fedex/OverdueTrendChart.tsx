import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography, Box } from "@mui/material";

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
    <Paper sx={{ p: 3, height: 360, borderRadius: 3 }}>
      <Typography fontWeight={600} mb={2}>
        Overdue Trend (Last 7 Days)
      </Typography>

      <Box width="100%" height={280}>
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
      </Box>
    </Paper>
  );
}
