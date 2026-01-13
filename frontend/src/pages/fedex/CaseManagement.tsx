import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CaseFilters from "./CaseManagementFilter";
import CaseTable from "./CaseManagementTable";

export default function CaseManagement() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f7f8fb", minHeight: "100vh" }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography fontSize={26} fontWeight={700}>
            Case Management
          </Typography>
          <Typography color="text.secondary">
            Manage and assign overdue invoice cases
          </Typography>
        </Box>

        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          sx={{ borderRadius: 2, textTransform: "none" }}
        >
          Export Report
        </Button>
      </Stack>

      {/* Filters */}
      <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
        <CaseFilters />
      </Paper>

      {/* Table */}
      <Paper sx={{ borderRadius: 3 }}>
        <CaseTable />
      </Paper>
    </Box>
  );
}
