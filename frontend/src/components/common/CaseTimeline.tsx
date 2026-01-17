import React from 'react';
import type { TimelineEvent } from '@/types';
import { cn } from '@/lib/utils';
import { Check, Circle } from 'lucide-react';

interface CaseTimelineProps {
  events: TimelineEvent[];
}


export const CaseTimeline: React.FC<CaseTimelineProps> = ({ events }) => {
  return (
    <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
      {events.map((event) => (
        <div key={event.id} className="relative pl-8">
          <div className={cn(
            "absolute left-0 top-1 w-[24px] h-[24px] rounded-full flex items-center justify-center z-10 border-2",
            event.completed ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-slate-200 text-slate-300",
            event.current && "border-[#4D148C] ring-4 ring-purple-50"
          )}>
            {event.completed ? <Check size={14} strokeWidth={3} /> : <Circle size={8} fill="currentColor" />}
          </div>
          <div>
            <p className={cn(
              "text-sm font-bold",
              event.completed ? "text-slate-900" : "text-slate-400"
            )}>
              {event.event}
            </p>
            {event.date && (
              <p className="text-xs text-slate-500 mt-0.5">{event.date}</p>
            )}
          </div>
        </div>
      ))}
      
    </div>
  );
};