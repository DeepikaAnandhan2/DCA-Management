import React from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  label: string; // Must match usage in Dashboard
  value: string | number;
  icon: keyof typeof Icons;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export const KPICard: React.FC<KPICardProps> = ({ label, value, icon, change, changeType }) => {
  const IconComponent = (Icons[icon] as React.ElementType) || Icons.FileWarning;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
          <h3 className="text-2xl font-black text-slate-900">{value}</h3>
          
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <span className={cn(
                "text-xs font-bold",
                changeType === 'positive' ? "text-emerald-600" : "text-rose-600"
              )}>
                {change > 0 ? '+' : ''}{change}%
              </span>
              <span className="text-[10px] text-slate-400 font-medium">vs last month</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-slate-50 rounded-xl text-[#4D148C]">
          <IconComponent size={24} />
        </div>
      </div>
    </div>
  );
};
