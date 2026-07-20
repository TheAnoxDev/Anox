const API = "http://localhost:5000/api/auth";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export async function register(data: RegisterData) {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result;
}

export async function login(data: LoginData) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result;
}

export async function logout() {
  const res = await fetch(`${API}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return await res.json();
}

export async function me() {
  const res = await fetch(`${API}/me`, {
    credentials: "include",
  });

  return await res.json();
}