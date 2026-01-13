import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/fedex/Sidebar";

export default function FedexLayout() {
  return (
    <Box display="flex" minHeight="100vh" width="100%">
      {/* Fixed Sidebar */}
      <Box
        sx={{
          width: 260,
          flexShrink: 0,
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flexGrow: 1,
          ml: "260px",
          bgcolor: "#F6F7FB",
          minHeight: "100vh",
          overflowY: "auto",
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
