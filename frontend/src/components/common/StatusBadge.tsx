import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Allowed case statuses coming from backend / UI
 * (kept flexible to avoid runtime crashes)
 */
export type CaseStatus =
  | 'OPEN'
  | 'APPROVED'
  | 'ASSIGNED'
  | 'CLOSED'
  | string; // 👈 important: allows unknown values safely

interface StatusBadgeProps {
  status: CaseStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  /**
   * Central status config
   */
  const config: Record<string, { className: string; label: string }> = {
    OPEN: {
      className: 'bg-orange-50 text-orange-600 border-orange-100',
      label: 'Open',
    },
    APPROVED: {
      className: 'bg-blue-50 text-blue-600 border-blue-100',
      label: 'Approved',
    },
    ASSIGNED: {
      className: 'bg-purple-50 text-[#4D148C] border-purple-100',
      label: 'Assigned',
    },
    CLOSED: {
      className: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      label: 'Closed',
    },
  };

  /**
   * Fallback for unexpected / invalid statuses
   */
  const fallback = {
    className: 'bg-gray-100 text-gray-600 border-gray-200',
    label: 'Unknown',
  };

  /**
   * Normalize backend value (handles: open, Open, assigned, etc.)
   */
  const normalizedStatus =
    typeof status === 'string' ? status.toUpperCase() : '';

  const { className, label } = config[normalizedStatus] ?? fallback;

  return (
    <span
      className={cn(
        'px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider',
        className
      )}
    >
      {label}
    </span>
  );
};
