import React from 'react';
import { CaseStatus } from '@/types';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: CaseStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config: Record<CaseStatus, { className: string; label: string }> = {
    OPEN: { className: 'bg-orange-50 text-orange-600 border-orange-100', label: 'Open' },
    APPROVED: { className: 'bg-blue-50 text-blue-600 border-blue-100', label: 'Approved' },
    ASSIGNED: { className: 'bg-purple-50 text-[#4D148C] border-purple-100', label: 'Assigned' },
    CLOSED: { className: 'bg-emerald-50 text-emerald-600 border-emerald-100', label: 'Closed' },
  };

  const { className, label } = config[status];


  return (
    <span className={cn(
      'px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider', 
      className
    )}>
      {label}
    </span>
  );
};