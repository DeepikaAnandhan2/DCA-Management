import { cases } from "../../data/cases";

export default function CaseTable() {
  const priorityStyles: Record<string, string> = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full border-collapse">
        {/* Table Head */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
              Case ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
              Customer
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
              Priority
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {cases.map((c) => (
            <tr
              key={c.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 text-sm text-gray-800">
                {c.id}
              </td>

              <td className="px-4 py-3 text-sm text-gray-800">
                {c.customer}
              </td>

              <td className="px-4 py-3 text-sm font-medium text-gray-900">
                ₹{c.amount.toLocaleString()}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[c.priority]}`}
                >
                  {c.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
