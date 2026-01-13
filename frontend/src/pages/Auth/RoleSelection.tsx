import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Radio
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";

type Role = "FEDEX" | "DCA" | null;

export default function RoleSelection() {
  const [role, setRole] = useState<Role>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (role === "FEDEX") navigate("/fedex/dashboard");
    if (role === "DCA") navigate("/dca/dashboard");
  };

  return (
    <Box display="flex" height="100vh">
      {/* LEFT PANEL */}
      <Box
        width="50%"
        bgcolor="#4B1D7A"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={8}
      >
        <Box mb={4}>
          <Box
            width={56}
            height={56}
            bgcolor="#FF6A00"
            borderRadius={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <ApartmentIcon />
          </Box>

          <Typography variant="h4" fontWeight={700} gutterBottom>
            FedEx DCA
          </Typography>

          <Typography variant="h6" mb={2}>
            Case Management System
          </Typography>

          <Typography opacity={0.8} maxWidth={420}>
            Streamlined debt collection management powered by AI
            prioritization and intelligent workflow automation.
          </Typography>
        </Box>

        <Box display="flex" gap={6} mt={4}>
          <Stat label="Active Cases" value="156" />
          <Stat label="SLA Compliance" value="94%" />
          <Stat label="Recovered" value="₹12.4L" />
        </Box>
      </Box>

      {/* RIGHT PANEL */}
      <Box
        width="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={420}>
          <Typography variant="h5" fontWeight={700} mb={1} textAlign="center">
            Welcome Back
          </Typography>
          <Typography color="text.secondary" mb={4} textAlign="center">
            Select your role to continue
          </Typography>

          {/* FEDEX OPTION */}
          <RoleCard
            title="FedEx Internal Team"
            subtitle="Admin & Supervisor Access"
            icon={<BusinessIcon />}
            selected={role === "FEDEX"}
            onClick={() => setRole("FEDEX")}
          />

          {/* DCA OPTION */}
          <RoleCard
            title="DCA Agency Portal"
            subtitle="Debt Collection Agency Access"
            icon={<ApartmentIcon />}
            selected={role === "DCA"}
            onClick={() => setRole("DCA")}
          />

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1.4,
              bgcolor: "#9C8FB3",
              color: "white",
              fontWeight: 600,
              "&:hover": { bgcolor: "#8B7FA3" }
            }}
            disabled={!role}
            onClick={handleContinue}
          >
            Continue to Dashboard →
          </Button>

          <Typography
            mt={4}
            fontSize={12}
            color="text.secondary"
            textAlign="center"
          >
            Chennai, Tamil Nadu, India • FedEx Express
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function RoleCard({
  title,
  subtitle,
  icon,
  selected,
  onClick
}: any) {
  return (
    <Paper
      onClick={onClick}
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        border: selected ? "2px solid #6A1FBF" : "1px solid #E0E0E0"
      }}
    >
      <Box
        width={48}
        height={48}
        bgcolor="#F2F3F5"
        borderRadius={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={2}
      >
        {icon}
      </Box>

      <Box flex={1}>
        <Typography fontWeight={600}>{title}</Typography>
        <Typography fontSize={13} color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      <Radio checked={selected} />
    </Paper>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography fontWeight={700} fontSize={22} color="#FF9800">
        {value}
      </Typography>
      <Typography fontSize={13} opacity={0.8}>
        {label}
      </Typography>
    </Box>
  );
}
