import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

export default function CaseManagementFilter() {
  const [status, setStatus] = useState("All Status");
  const [priority, setPriority] = useState("All Priority");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "100%",
      }}
    >
      {/* Search */}
      <TextField
        fullWidth
        placeholder="Search by Case ID, Invoice ID, or Customer..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9ca3af" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          background: "#fff",
          borderRadius: 2,
        }}
      />

      {/* Status Filter */}
      <FormControl sx={{ minWidth: 170 }}>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          input={<OutlinedInput />}
          sx={{
            borderRadius: 2,
            background: "#fff",
          }}
          startAdornment={
            <InputAdornment position="start">
              <FilterListIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="All Status">All Status</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Assigned">Assigned</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </Select>
      </FormControl>

      {/* Priority Filter */}
      <FormControl sx={{ minWidth: 170 }}>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          input={<OutlinedInput />}
          sx={{
            borderRadius: 2,
            background: "#fff",
          }}
          startAdornment={
            <InputAdornment position="start">
              <FilterListIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="All Priority">All Priority</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
