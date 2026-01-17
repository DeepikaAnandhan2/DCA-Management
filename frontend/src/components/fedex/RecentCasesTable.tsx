const rows = [
  {
    id: "CASE-001",
    customer: "Rajesh Kumar Enterprises",
    amount: "₹245,000",
    days: 45,
    priority: "High",
    status: "Open",
    sla: "2024-01-15",
  },
  {
    id: "CASE-002",
    customer: "Chennai Logistics Pvt Ltd",
    amount: "₹189,500",
    days: 32,
    priority: "Medium",
    status: "Approved",
    sla: "2024-01-20",
  },
  {
    id: "CASE-003",
    customer: "Madurai Textiles Co",
    amount: "₹567,000",
    days: 60,
    priority: "High",
    status: "Assigned",
    sla: "2024-01-10",
  },
  {
    id: "CASE-004",
    customer: "Coimbatore Manufacturing",
    amount: "₹125,000",
    days: 15,
    priority: "Low",
    status: "Open",
    sla: "2024-02-01",
  },
  {
    id: "CASE-005",
    customer: "Salem Traders",
    amount: "₹89,000",
    days: 28,
    priority: "Medium",
    status: "Closed",
    sla: "2024-01-25",
  },
];

const priorityStyles: Record<string, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const statusStyles: Record<string, string> = {
  Open: "bg-blue-100 text-blue-700",
  Approved: "bg-green-100 text-green-700",
  Assigned: "bg-purple-100 text-purple-700",
  Closed: "bg-gray-100 text-gray-600",
};

export default function RecentCasesTable() {
  return (
    <div className="mt-6 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Recent AI-Prioritized Cases
          </h3>
          <p className="text-xs text-gray-500">
            Latest cases requiring attention
          </p>
        </div>

        <button className="text-sm font-medium text-indigo-600 hover:underline">
          View All →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {[
                "CASE ID",
                "CUSTOMER",
                "AMOUNT DUE",
                "OVERDUE DAYS",
                "AI PRIORITY",
                "STATUS",
                "SLA DUE",
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-semibold text-indigo-600">
                  {r.id}
                </td>

                <td className="px-6 py-4 text-sm text-gray-800">
                  {r.customer}
                </td>

                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {r.amount}
                </td>

                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    r.days > 30 ? "text-red-600" : "text-gray-700"
                  }`}
                >
                  {r.days} days
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[r.priority]}`}
                  >
                    {r.priority}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[r.status]}`}
                  >
                    {r.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {r.sla}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
