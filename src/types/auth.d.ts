export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    nickname: string;
  };
}

export interface User {
  id: string;
  email: string;
  nickname: string;
}
