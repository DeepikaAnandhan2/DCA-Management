import { RefreshCw } from "lucide-react";

import DCAStatCard from "../../components/fedex/DCAStatCard";
import DCACard from "../../components/fedex/DCACard";
import { dcaList } from "../../data/dcas";

export default function DCAAssignment() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">
            DCA Assignment
          </h1>
          <p className="text-sm text-gray-500">
            Manage registered DCAs and manually assign cases
          </p>
        </div>

        <button
          className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          <RefreshCw size={16} />
          Refresh List
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DCAStatCard
          title="Registered DCAs"
          value="3"
          icon="agency"
        />

        <DCAStatCard
          title="Total Active Cases"
          value="25"
          icon="cases"
        />

        <DCAStatCard
          title="Avg SLA Performance"
          value="91%"
          icon="performance"
        />
      </div>

      {/* DCA CARDS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {dcaList.map((dca) => (
          <DCACard key={dca.code} dca={dca} />
        ))}
      </div>
    </div>
  );
}
