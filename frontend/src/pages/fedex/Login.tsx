import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  return (
    <Box display="flex" height="100vh">
      <Box flex={1} bgcolor="#2c1147" color="white" p={6}>
        <Typography variant="h3">FedEx DCA</Typography>
        <Typography mt={2}>AI-Powered Collections</Typography>
      </Box>

      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Button variant="contained" onClick={() => nav("/dashboard")}>
          Continue to Dashboard
        </Button>
      </Box>
    </Box>
  );
}
