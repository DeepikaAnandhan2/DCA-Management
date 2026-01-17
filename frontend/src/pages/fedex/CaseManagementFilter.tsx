import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function CaseManagementFilter() {
  const [status, setStatus] = useState("All Status");
  const [priority, setPriority] = useState("All Priority");

  return (
    <div className="flex w-full items-center gap-4">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by Case ID, Invoice ID, or Customer..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Status Filter */}
      <div className="relative min-w-[170px]">
        <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>All Status</option>
          <option>Open</option>
          <option>Approved</option>
          <option>Assigned</option>
          <option>Closed</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div className="relative min-w-[170px]">
        <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>All Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
    </div>
  );
}
