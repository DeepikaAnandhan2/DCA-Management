import { Download } from "lucide-react";
import CaseFilters from "./CaseManagementFilter";
import CaseTable from "./CaseManagementTable";

export default function CaseManagement() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Case Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage and assign overdue invoice cases
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <CaseFilters />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <CaseTable />
      </div>
    </div>
  );
}
