const BASE_URL = "http://localhost:8000";

export const apiFetch = async (url: string, options: any = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(errorData || "API Error");
  }

  return res;
};