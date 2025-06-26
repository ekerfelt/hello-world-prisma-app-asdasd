import { api } from "encore.dev/api";
import { prisma } from "./db";

export interface User {
  id: number;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListUsersResponse {
  users: User[];
}

// Retrieves all users, ordered by creation date (latest first).
export const listUsers = api<void, ListUsersResponse>(
  { expose: true, method: "GET", path: "/users" },
  async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return { users };
  }
);
