"use client"
import React, { useEffect, useState } from "react";

interface Props {
  valueStart?: string; // in datetime-local format YYYY-MM-DDTHH:mm or empty
  valueEnd?: string;
  onChange: (start: string, end: string) => void;
  className?: string;
}

// Helper to format Date -> YYYY-MM-DDTHH:mm
const toDateTimeLocal = (d: Date) => {
  const pad = (n: number) => n.toString().padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const min = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
};

// Helper to extract date part YYYY-MM-DD from datetime-local
const datePart = (s?: string) => {
  if (!s) return "";
  return s.split("T")[0];
};

// Provide a small, accessible date-range picker using native date inputs and optional time selects.
export default function DateRangePicker({ valueStart, valueEnd, onChange, className }: Props) {
  // maintain local date and time pieces
  const [startDate, setStartDate] = useState<string>(datePart(valueStart) || "");
  const [endDate, setEndDate] = useState<string>(datePart(valueEnd) || "");

  // default time to 12:00 if not present
  const defaultTime = (s?: string) => (s && s.includes("T") ? s.split("T")[1].slice(0,5) : "12:00");
  const [startTime, setStartTime] = useState<string>(defaultTime(valueStart));
  const [endTime, setEndTime] = useState<string>(defaultTime(valueEnd));

  // keep parent in sync
  useEffect(() => {
    const start = startDate ? `${startDate}T${startTime}` : "";
    const end = endDate ? `${endDate}T${endTime}` : "";
    onChange(start, end);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, startTime, endTime]);

  // if parent updates values, reflect them
  useEffect(() => {
    if (valueStart) {
      setStartDate(datePart(valueStart));
      setStartTime(defaultTime(valueStart));
    }
    if (valueEnd) {
      setEndDate(datePart(valueEnd));
      setEndTime(defaultTime(valueEnd));
    }
  }, [valueStart, valueEnd]);

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">CHECK IN</label>
          <div className="flex gap-2 items-center">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full pl-3 pr-2 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061]"
            />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-28 pl-3 pr-2 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061]"
            />
          </div>
        </div>

        <div>
          <label className="text-[#C5C5C5] text-sm font-medium mb-3 block">CHECK OUT</label>
          <div className="flex gap-2 items-center">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full pl-3 pr-2 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061]"
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-28 pl-3 pr-2 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
