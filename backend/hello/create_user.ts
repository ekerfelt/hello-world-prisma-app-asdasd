import { api } from "encore.dev/api";
import { prisma } from "./db";

export interface CreateUserRequest {
  email: string;
  name?: string;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Creates a new user.
export const createUser = api<CreateUserRequest, User>(
  { expose: true, method: "POST", path: "/users" },
  async (req) => {
    const user = await prisma.user.create({
      data: {
        email: req.email,
        name: req.name,
      },
    });
    
    return user;
  }
);
