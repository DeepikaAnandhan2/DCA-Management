import StatCard from "../../components/fedex/StatCard";
import OverdueTrendChart from "../../components/fedex/OverdueTrendChart";
import PriorityDonutChart from "../../components/fedex/PriorityDonutChart";
import RecentCasesTable from "../../components/fedex/RecentCasesTable";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Overdue Invoices"
          value="156"
          trend="-12%"
        />
        <StatCard
          title="AI High Priority Cases"
          value="34"
          trend="-8%"
        />
        <StatCard
          title="Approved Cases"
          value="45"
          trend="+15%"
          positive
        />
        <StatCard
          title="Assigned to DCAs"
          value="28"
          trend="+5%"
          positive
        />
        <StatCard
          title="SLA Breached Cases"
          value="7"
          trend="+2%"
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <OverdueTrendChart />
        </div>
        <div className="lg:col-span-5">
          <PriorityDonutChart />
        </div>
      </div>

      {/* RECENT CASES TABLE */}
      <RecentCasesTable />
    </div>
  );
}
