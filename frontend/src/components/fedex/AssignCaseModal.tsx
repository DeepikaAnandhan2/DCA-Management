import { useState } from "react";
import { cases } from "../../data/cases";

interface AssignCaseModalProps {
  open: boolean;
  onClose: () => void;
  dca: {
    name: string;
  };
}

export default function AssignCaseModal({
  open,
  onClose,
  dca,
}: AssignCaseModalProps) {
  const [selected, setSelected] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal container */}
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        {/* Title */}
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Assign Case to {dca.name}
        </h2>

        {/* Select */}
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a case
          </option>
          {cases.map((c) => (
            <option key={c.id} value={c.id}>
              {c.id} - {c.customer}
            </option>
          ))}
        </select>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            disabled={!selected}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );
}
