import { Grid } from "@mui/material";
import StatCard from "../../components/fedex/StatCard";
import OverdueTrendChart from "../../components/fedex/OverdueTrendChart";
import PriorityDonutChart from "../../components/fedex/PriorityDonutChart";
import RecentCasesTable from "../../components/fedex/RecentCasesTable";

export default function Dashboard() {
  return (
    <>
      {/* KPI CARDS – ALL IN ONE ROW */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={2.4}>
          <StatCard title="Total Overdue Invoices" value="156" trend="-12%" />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <StatCard title="AI High Priority Cases" value="34" trend="-8%" />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <StatCard title="Approved Cases" value="45" trend="+15%" positive />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <StatCard title="Assigned to DCAs" value="28" trend="+5%" positive />
        </Grid>
        <Grid item xs={12} md={2.4}>
          <StatCard title="SLA Breached Cases" value="7" trend="+2%" />
        </Grid>
      </Grid>

      {/* CHARTS – SAME ROW, FULL WIDTH */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={7}>
          <OverdueTrendChart />
        </Grid>
        <Grid item xs={12} md={5}>
          <PriorityDonutChart />
        </Grid>
      </Grid>

      {/* TABLE BELOW */}
      <RecentCasesTable />
    </>
  );
}
