import React from 'react';
import { CasePriority } from '@/types';
import { cn } from '@/lib/utils';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

interface PriorityBadgeProps {
  priority: CasePriority;
  showIcon?: boolean;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, showIcon = true }) => {
  const config = {
    HIGH: {
      className: 'bg-rose-50 text-rose-600 border-rose-100',
      icon: AlertTriangle,
      label: 'High Risk',
    },
    MEDIUM: {
      className: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: AlertCircle,
      label: 'Medium Risk',
    },
    LOW: {
      className: 'bg-slate-50 text-slate-600 border-slate-100',
      icon: CheckCircle,
      label: 'Low Risk',
    },
  };

  const { className, icon: Icon, label } = config[priority];

  return (
    <span className={cn(
      'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase', 
      className
    )}>
      {showIcon && <Icon className="w-3 h-3 mr-1" />}
      {label}
    </span>
  );
};