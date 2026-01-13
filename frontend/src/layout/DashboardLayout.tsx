import { Grid, Box } from "@mui/material";
import StatCard from "../../components/fedex/StatCard";
import OverdueTrendChart from "../../components/fedex/OverdueTrendChart";
import PriorityDonutChart from "../../components/fedex/PriorityDonutChart";
import RecentCasesTable from "../../components/fedex/RecentCasesTable";

export default function Dashboard() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* ===================== STATS ===================== */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Overdue Invoices" value="156" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="AI High Priority" value="34" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Assigned to DCAs" value="28" />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="SLA Breached" value="7" />
        </Grid>
      </Grid>

      {/* ===================== CHARTS ===================== */}
      <Grid container spacing={2} mt={2}>
        {/* FULL WIDTH TREND CHART */}
        <Grid item xs={12}>
          <OverdueTrendChart />
        </Grid>

        {/* DONUT CHART BELOW */}
        <Grid item xs={12} md={6}>
          <PriorityDonutChart />
        </Grid>
      </Grid>
      <Grid container mt={3}>
  <Grid item xs={12}>
    <RecentCasesTable />
  </Grid>
</Grid>

    </Box>
  );
}
