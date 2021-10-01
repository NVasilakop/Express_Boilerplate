
/**
 * Required External Modules
 */
 import express from "express";
 import path from "path";
 import { Request, Response } from 'express';
 import cors from "cors";
 import helmet from "helmet";
 import morgan, { StreamOptions } from "morgan";
/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "8000";
//  const stream: StreamOptions = {
//   // Use the http severity
//   write: (message) => Logger.http(message),
// };
/**
 *  App Configuration
 */
 app.use(helmet());
 app.use(cors);
 app.use(express.json())
 app.use(morgan('combined'));
/**
 * Routes Definitions
 */
 app.get("/", (req: Request, res:Response) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });
/**
 * Server Activation
 */
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });