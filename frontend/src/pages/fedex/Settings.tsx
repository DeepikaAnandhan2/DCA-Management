import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Switch,
  Divider
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Row({
  title,
  subtitle,
  value
}: {
  title: string;
  subtitle: string;
  value: boolean;
}) {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography fontSize={13} color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
        <Switch checked={value} color="secondary" />
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
}

export default function Settings() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={700}>
        Settings
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Manage your account and system preferences
      </Typography>

      {/* Profile */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <PersonOutlineIcon sx={{ color: "#4b1d6f", mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            Profile Information
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Full Name</Typography>
            <TextField fullWidth value="Priya Sharma" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Email</Typography>
            <TextField fullWidth value="priya.sharma@fedex.com" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Role</Typography>
            <TextField fullWidth disabled value="FedEx Supervisor" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Region</Typography>
            <TextField fullWidth disabled value="Chennai, Tamil Nadu" />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "#3b1a5a",
            "&:hover": { bgcolor: "#2e1446" },
            textTransform: "none",
            px: 4
          }}
        >
          Save Changes
        </Button>
      </Paper>

      {/* Notifications */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <NotificationsNoneIcon sx={{ color: "#4b1d6f", mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            Notification Preferences
          </Typography>
        </Box>

        <Row
          title="AI Alerts"
          subtitle="Alerts for AI-tagged high priority cases"
          value={true}
        />
        <Row
          title="Daily Summary"
          subtitle="Receive daily case summary reports"
          value={true}
        />
        <Row
          title="DCA Updates"
          subtitle="Notifications for DCA case updates"
          value={false}
        />
      </Paper>

      {/* Security */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <ShieldOutlinedIcon sx={{ color: "#4b1d6f", mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            Security
          </Typography>
        </Box>

        <Button variant="outlined">Change Password</Button>
        <Typography fontSize={13} color="text.secondary" mt={2}>
          Last password change: 30 days ago
        </Typography>
      </Paper>

      {/* Email */}
      <Paper sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <MailOutlineIcon sx={{ color: "#4b1d6f", mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            Email Settings
          </Typography>
        </Box>

        <Row
          title="Marketing Emails"
          subtitle="Receive product updates and news"
          value={false}
        />
        <Row
          title="System Emails"
          subtitle="Critical system notifications"
          value={true}
        />
      </Paper>
    </Box>
  );
}
