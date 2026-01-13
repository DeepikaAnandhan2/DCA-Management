import { Box, Typography, Paper } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const iconMap: any = {
  agency: <GroupsIcon />,
  cases: <AssignmentIcon />,
  performance: <TrendingUpIcon />,
};

export default function DCAStatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: "agency" | "cases" | "performance";
}) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography color="text.secondary">{title}</Typography>
          <Typography variant="h5" fontWeight={700}>
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#EFEAF7",
            borderRadius: 2,
            p: 1.5,
            height: 48,
          }}
        >
          {iconMap[icon]}
        </Box>
      </Box>
    </Paper>
  );
}
