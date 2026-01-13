import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItemStyle = (path: string) => ({
    borderRadius: 2,
    mb: 0.5,
    bgcolor: isActive(path) ? "#45207A" : "transparent",
    "&:hover": {
      bgcolor: "#3A1768",
    },
  });

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        position: "fixed",
        bgcolor: "#2E0F59",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box px={3} py={3}>
        <Typography fontSize={20} fontWeight={700}>
          FedEx
        </Typography>
        <Typography fontSize={13} color="#cfc7ff">
          DCA Management
        </Typography>
      </Box>

      {/* User */}
      <Box px={3} py={2} display="flex" alignItems="center" gap={2}>
        <Avatar sx={{ bgcolor: "#5b2db3" }}>P</Avatar>
        <Box>
          <Typography fontWeight={600}>Priya Sharma</Typography>
          <Typography fontSize={12} color="#cfc7ff">
            FedEx Team
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#40207a" }} />

      {/* Menu */}
      <List sx={{ px: 2, mt: 1 }}>
        <ListItemButton
          onClick={() => navigate("/fedex/dashboard")}
          selected={isActive("/fedex/dashboard")}
          sx={menuItemStyle("/fedex/dashboard")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/fedex/cases")}
          selected={isActive("/fedex/cases")}
          sx={menuItemStyle("/fedex/cases")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Case Management" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/fedex/dca")}
          selected={isActive("/fedex/dca")}
          sx={menuItemStyle("/fedex/dca")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="DCA Assignment" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/fedex/settings")}
          selected={isActive("/fedex/settings")}
          sx={menuItemStyle("/fedex/settings")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>

      <Box flex={1} />

      {/* Logout */}
      <Box px={2} pb={2}>
        <ListItemButton
          sx={{
            borderRadius: 2,
            "&:hover": { bgcolor: "#3A1768" },
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Box>
  );
}
