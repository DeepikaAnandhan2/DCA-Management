import { apiFetch } from "./api";

/* ============================
   GET ALL CASES (DCA / FEDEX)
============================ */
export const getCases = async () => {
  const res = await apiFetch("/api/v1/cases");

  if (!res.ok) {
    throw new Error("Failed to fetch cases");
  }

  return res.json();
};

/* ============================
   GET SINGLE CASE
============================ */
export const getCaseDetail = async (id: string) => {
  const res = await apiFetch(`/api/v1/cases/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch case detail");
  }

  return res.json();
};

/* ============================
   GET CASE HISTORY
============================ */
export const getCaseHistory = async (id: string) => {
  const res = await apiFetch(`/api/v1/cases/${id}/history`);

  if (!res.ok) {
    throw new Error("Failed to fetch case history");
  }

  return res.json();
};

/* ============================
   MARK CASE AS PAID
============================ */
export const markCasePaid = async (id: string) => {
  const res = await apiFetch(`/api/v1/cases/${id}/mark-paid`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to mark case as paid");
  }

  return res.json();
};

/* ============================
   ADD CASE NOTE
============================ */
export const addCaseNote = async (id: string, note: string) => {
  const res = await apiFetch(`/api/v1/cases/${id}/notes`, {
    method: "POST",
    body: JSON.stringify({ note }),
  });

  if (!res.ok) {
    throw new Error("Failed to add case note");
  }

  return res.json();
};
