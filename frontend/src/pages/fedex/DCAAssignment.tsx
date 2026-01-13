import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import DCAStatCard from "../../components/fedex/DCAStatCard";
import DCACard from "../../components/fedex/DCACard";
import { dcaList } from "../../data/dcas";

export default function DCAAssignment() {
  return (
    <Box>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={700}>
            DCA Assignment
          </Typography>
          <Typography color="text.secondary">
            Manage registered DCAs and manually assign cases
          </Typography>
        </Box>

        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          sx={{ height: 42 }}
        >
          Refresh List
        </Button>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <DCAStatCard
            title="Registered DCAs"
            value="3"
            icon="agency"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <DCAStatCard
            title="Total Active Cases"
            value="25"
            icon="cases"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <DCAStatCard
            title="Avg SLA Performance"
            value="91%"
            icon="performance"
          />
        </Grid>
      </Grid>

      {/* DCA Cards */}
      <Grid container spacing={3}>
        {dcaList.map((dca) => (
          <Grid item xs={12} md={4} key={dca.code}>
            <DCACard dca={dca} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
