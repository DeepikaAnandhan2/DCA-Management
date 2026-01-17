import { Mail, Phone } from "lucide-react";

export default function DCACard({ dca }: any) {
  const slaColor =
    dca.sla >= 90 ? "text-green-600" : "text-orange-500";
  const slaBarColor =
    dca.sla >= 90 ? "bg-green-500" : "bg-orange-400";

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          {dca.name}
        </h3>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {dca.region}
        </span>
      </div>

      <p className="text-xs text-gray-500">{dca.code}</p>

      {/* Contact Info */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Mail className="h-4 w-4" />
          <span>{dca.email}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="h-4 w-4" />
          <span>{dca.phone}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 flex gap-3">
        <div className="flex-1 rounded-lg bg-gray-50 p-3 text-center">
          <p className="text-lg font-semibold text-gray-900">
            {dca.activeCases}
          </p>
          <p className="text-xs text-gray-500">Active Cases</p>
        </div>

        <div className="flex-1 rounded-lg bg-gray-50 p-3 text-center">
          <p className={`text-lg font-semibold ${slaColor}`}>
            {dca.sla}%
          </p>
          <p className="text-xs text-gray-500">SLA Performance</p>
        </div>
      </div>

      {/* SLA Progress */}
      <div className="mt-5">
        <p className="mb-1 text-xs text-gray-600">
          SLA Compliance <span className="font-semibold">{dca.sla}%</span>
        </p>

        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className={`h-2 rounded-full ${slaBarColor}`}
            style={{ width: `${dca.sla}%` }}
          />
        </div>
      </div>

      {/* Action */}
      <button
        className="mt-6 w-full rounded-lg bg-[#3B1A6D] px-4 py-2 text-sm font-semibold text-white hover:bg-[#32165d] transition"
      >
        Assign Case
      </button>
    </div>
  );
}
