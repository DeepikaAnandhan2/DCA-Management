import { Card, Box, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function StatCard({
  title,
  value,
  change,
  positive,
  icon,
}: any) {
  return (
    <Card sx={{ p: 3, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography fontSize={14} color="text.secondary">
            {title}
          </Typography>
          <Typography fontSize={28} fontWeight={700}>
            {value}
          </Typography>

          <Box display="flex" alignItems="center" mt={1}>
            {positive ? (
              <TrendingUpIcon sx={{ color: "green", fontSize: 16 }} />
            ) : (
              <TrendingDownIcon sx={{ color: "red", fontSize: 16 }} />
            )}
            <Typography
              fontSize={13}
              ml={0.5}
              color={positive ? "green" : "red"}
            >
              {change} vs last week
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "#ede7f6",
            p: 1.5,
            borderRadius: 2,
            height: 40,
          }}
        >
          {icon}
        </Box>
      </Box>
    </Card>
  );
}
