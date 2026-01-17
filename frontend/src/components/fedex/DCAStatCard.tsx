import { Users, ClipboardList, TrendingUp } from "lucide-react";

const iconMap = {
  agency: <Users className="h-5 w-5 text-[#3B1A6D]" />,
  cases: <ClipboardList className="h-5 w-5 text-[#3B1A6D]" />,
  performance: <TrendingUp className="h-5 w-5 text-[#3B1A6D]" />,
};

export default function DCAStatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: "agency" | "cases" | "performance";
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {value}
          </p>
        </div>

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEAF7]">
          {iconMap[icon]}
        </div>
      </div>
    </div>
  );
}
