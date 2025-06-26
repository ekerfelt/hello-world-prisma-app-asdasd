import { api, APIError } from "encore.dev/api";
import { prisma } from "./db";

export interface GetUserParams {
  id: number;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Retrieves a user by ID.
export const getUser = api<GetUserParams, User>(
  { expose: true, method: "GET", path: "/users/:id" },
  async (params) => {
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });
    
    if (!user) {
      throw APIError.notFound("user not found");
    }
    
    return user;
  }
);
