import {
  Box,
  Typography,
  Paper,
  Chip,
  LinearProgress,
  Button,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function DCACard({ dca }: any) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography fontWeight={600}>{dca.name}</Typography>
        <Chip label={dca.region} size="small" />
      </Box>

      <Typography fontSize={13} color="text.secondary">
        {dca.code}
      </Typography>

      <Stack spacing={1} mt={2}>
        <Box display="flex" gap={1}>
          <EmailIcon fontSize="small" />
          <Typography fontSize={14}>{dca.email}</Typography>
        </Box>

        <Box display="flex" gap={1}>
          <PhoneIcon fontSize="small" />
          <Typography fontSize={14}>{dca.phone}</Typography>
        </Box>
      </Stack>

      <Box display="flex" gap={2} mt={3}>
        <Paper sx={{ p: 2, flex: 1, bgcolor: "#F7F7F7" }}>
          <Typography fontWeight={600} align="center">
            {dca.activeCases}
          </Typography>
          <Typography fontSize={12} align="center">
            Active Cases
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, flex: 1, bgcolor: "#F7F7F7" }}>
          <Typography
            fontWeight={600}
            align="center"
            color={dca.sla >= 90 ? "green" : "orange"}
          >
            {dca.sla}%
          </Typography>
          <Typography fontSize={12} align="center">
            SLA Performance
          </Typography>
        </Paper>
      </Box>

      <Box mt={3}>
        <Typography fontSize={13} mb={1}>
          SLA Compliance <b>{dca.sla}%</b>
        </Typography>
        <LinearProgress
          variant="determinate"
          value={dca.sla}
          sx={{ height: 8, borderRadius: 5 }}
        />
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, bgcolor: "#3B1A6D" }}
      >
        Assign Case
      </Button>
    </Paper>
  );
}
