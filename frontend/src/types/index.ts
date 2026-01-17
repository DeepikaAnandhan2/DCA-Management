// src/types/index.ts
export type UserRole = 'fedex' | 'dca';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type CaseStatus = 'OPEN' | 'APPROVED' | 'ASSIGNED' | 'CLOSED';
export type CasePriority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TimelineEvent {
  id: string;
  event: string;
  date: string;
  completed: boolean;
  current?: boolean;
}

export interface Case {
  id: string;
  invoiceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  amountDue: number;
  overdueDays: number;
  aiPriority: CasePriority;
  aiRiskScore: number;
  status: CaseStatus;
  region: string;
  slaDueDate: string;
  createdAt: string;
  notes: string[];
  timeline: TimelineEvent[];
}
