import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  positive,
  icon,
}: {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <p className="mt-1 text-3xl font-bold text-gray-900">
            {value}
          </p>

          <div className="mt-2 flex items-center gap-1">
            {positive ? (
              <TrendingUp className="h-4 w-4 text-green-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}

            <span
              className={`text-xs font-medium ${
                positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change} vs last week
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
          {icon}
        </div>
      </div>
    </div>
  );
}
