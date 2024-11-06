import apiClient from "./apiClient";

export const login = async (email: string, password: string) => {
  const response = await apiClient.post("/auth/login", { email, password });
  return response.data;
};

export const signup = async (email: string, password: string, name: string) => {
  const response = await apiClient.post("/auth/signup", {
    email,
    password,
    name,
  });
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post("/auth/logout");
  return response.data;
};
