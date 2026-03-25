export interface User {
  id: string;
  username: string;
  email: string;
  avatar_url?: string;
  created_at: string;
}

export interface CreateUserDto {
  username: string;
  email: string;
  avatar_url?: string;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  avatar_url?: string;
}
