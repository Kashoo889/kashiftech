import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Enable CORS for development (when frontend and backend run separately)
  if (process.env.NODE_ENV !== "production") {
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }
      next();
    });
  }

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Only serve static files in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(staticPath));

    // Handle client-side routing - serve index.html for all routes
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  } else {
    // Development mode: just provide API endpoints
    app.get("/api/health", (_req, res) => {
      res.json({ status: "ok", message: "Backend server is running" });
    });
  }

  // Use different port for backend (3001) vs frontend (3000)
  const port = process.env.PORT || process.env.BACKEND_PORT || 3001;

  server.listen(port, () => {
    console.log(`🚀 Backend server running on http://localhost:${port}/`);
    if (process.env.NODE_ENV !== "production") {
      console.log(`📡 API endpoint: http://localhost:${port}/api/health`);
    }
  });
}

startServer().catch(console.error);
