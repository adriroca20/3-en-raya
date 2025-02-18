import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import gameRouter from "./src/router";
import { GameController } from "./src/controller";
import { connectDB } from "./src/config/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4321;
const gameController = new GameController();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/game', gameRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});