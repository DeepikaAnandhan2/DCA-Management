import { MoreHorizontal } from "lucide-react";

const rows = [
  {
    caseId: "CASE-001",
    invoice: "INV-2024-001234",
    customer: "Rajesh Kumar Enterprises",
    amount: "₹245,000",
    days: 45,
    priority: "High",
    status: "Open",
    region: "Chennai",
    sla: "2024-01-15",
  },
  {
    caseId: "CASE-002",
    invoice: "INV-2024-001235",
    customer: "Chennai Logistics Pvt Ltd",
    amount: "₹189,500",
    days: 32,
    priority: "Medium",
    status: "Approved",
    region: "Chennai",
    sla: "2024-01-20",
  },
  {
    caseId: "CASE-003",
    invoice: "INV-2024-001236",
    customer: "Madurai Textiles Co",
    amount: "₹567,000",
    days: 60,
    priority: "High",
    status: "Assigned",
    region: "Tamil Nadu",
    sla: "2024-01-10",
  },
  {
    caseId: "CASE-004",
    invoice: "INV-2024-001237",
    customer: "Coimbatore Manufacturing",
    amount: "₹125,000",
    days: 15,
    priority: "Low",
    status: "Open",
    region: "Tamil Nadu",
    sla: "2024-02-01",
  },
  {
    caseId: "CASE-005",
    invoice: "INV-2024-001238",
    customer: "Salem Traders",
    amount: "₹89,000",
    days: 28,
    priority: "Medium",
    status: "Closed",
    region: "Tamil Nadu",
    sla: "2024-01-25",
  },
  {
    caseId: "CASE-006",
    invoice: "INV-2024-001239",
    customer: "Vellore Industries",
    amount: "₹310,000",
    days: 55,
    priority: "High",
    status: "Assigned",
    region: "Tamil Nadu",
    sla: "2024-01-08",
  },
];

const priorityClass: Record<string, string> = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-orange-50 text-orange-700",
  Low: "bg-green-50 text-green-700",
};

const statusClass: Record<string, string> = {
  Open: "bg-blue-50 text-blue-700",
  Approved: "bg-green-50 text-green-700",
  Assigned: "bg-purple-50 text-purple-700",
  Closed: "bg-gray-100 text-gray-700",
};

export default function CaseTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            {[
              "CASE ID",
              "INVOICE ID",
              "CUSTOMER NAME",
              "AMOUNT DUE",
              "OVERDUE DAYS",
              "AI PRIORITY",
              "STATUS",
              "REGION",
              "SLA DUE DATE",
              "ACTIONS",
            ].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((r) => (
            <tr key={r.caseId} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-indigo-700">
                {r.caseId}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {r.invoice}
              </td>

              <td className="px-4 py-3 font-semibold text-gray-900">
                {r.customer}
              </td>

              <td className="px-4 py-3 font-semibold text-gray-900">
                {r.amount}
              </td>

              <td
                className={`px-4 py-3 text-sm ${
                  r.days > 30 ? "text-red-600 font-semibold" : "text-gray-700"
                }`}
              >
                {r.days} days
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    priorityClass[r.priority]
                  }`}
                >
                  {r.priority}
                </span>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    statusClass[r.status]
                  }`}
                >
                  {r.status}
                </span>
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {r.region}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {r.sla}
              </td>

              <td className="px-4 py-3 text-right">
                <button className="rounded-md p-1 hover:bg-gray-100">
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-4 py-3 text-sm text-gray-500">
        Showing {rows.length} of {rows.length} cases
      </div>
    </div>
  );
}
