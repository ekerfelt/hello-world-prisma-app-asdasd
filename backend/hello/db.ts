import db from "../dbs/main";
import { PrismaClient } from "../dbs/main/generated/client";

export const prisma = new PrismaClient({ 
  datasources: { 
    db: { url: db.connectionString } 
  } 
});
