
/**
 * Required External Modules
 */
 import express from "express";
 import path from "path";
 import { Request, Response } from 'express';
/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */

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