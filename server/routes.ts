import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";
  
  // Serve static files from the public directory
  app.use(express.static(path.join(process.cwd(), "client/public")));
  
  // Test endpoint
  app.get(`${apiPrefix}/test`, (req: Request, res: Response) => {
    res.json({ message: "API is working!" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
