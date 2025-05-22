import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic health check route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Basic API route
  app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from VibroConnect!' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
