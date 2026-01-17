import type { Case } from '@/types';

export const mockCases: Case[] = [
  {
    id: '1',
    invoiceId: 'INV-2026-001',
    customerName: 'Global Logistics Inc',
    customerEmail: 'billing@globallogistics.com',
    customerPhone: '+91 98765 43210',
    customerAddress: '123 Business Park, OMR, Chennai, TN - 600119',
    amountDue: 450000,
    overdueDays: 45,
    aiPriority: 'HIGH',
    aiRiskScore: 88,
    status: 'ASSIGNED',
    region: 'South India',
    slaDueDate: '2026-01-20',
    createdAt: '2026-01-01',
    notes: ['Customer requested discount on interest', 'First follow-up call completed'],
    timeline: [
      { id: 't1', event: 'Case Generated', date: '2026-01-01', completed: true },
      { id: 't2', event: 'Assigned to Agency', date: '2026-01-05', completed: true },
      { id: 't3', event: 'Legal Notice Sent', date: '2026-01-10', completed: false, current: true }
    ]
  },
  {
    id: '2',
    invoiceId: 'INV-2026-005',
    customerName: 'TechFlow Solutions',
    customerEmail: 'finance@techflow.io',
    customerPhone: '+91 91234 56789',
    customerAddress: 'Tech Tower, Phase 2, Whitefield, Bangalore, KA',
    amountDue: 125000,
    overdueDays: 12,
    aiPriority: 'MEDIUM',
    aiRiskScore: 42,
    status: 'OPEN',
    region: 'South India',
    slaDueDate: '2026-01-25',
    createdAt: '2026-01-10',
    notes: ['Incorrect GST details provided by client'],
    timeline: [
      { id: 't4', event: 'Case Generated', date: '2026-01-10', completed: true }
    ]
  }
];