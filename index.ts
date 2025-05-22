import express from 'express';
import { registerRoutes } from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files
app.use(express.static('client'));

// Register API routes
registerRoutes(app).then(server => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
