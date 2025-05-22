import express from "express";
import * as dotenv from "dotenv";
import { registerRoutes } from "./routes";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
app.use(express.json());

// Register routes
const startServer = async () => {
  const server = await registerRoutes(app);
  
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer().catch(console.error);
