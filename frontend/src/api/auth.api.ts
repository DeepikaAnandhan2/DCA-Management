import { apiFetch } from "./api";

export const loginApi = async (email: string, role: string) => {
  const res = await apiFetch("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, role }),
  });
  return res.json();
};