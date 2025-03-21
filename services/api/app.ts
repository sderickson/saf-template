/**
 * API Service Application
 *
 * Main API service for the SAF architecture.
 * Implements common middleware patterns and routes for various API endpoints.
 */

import { recommendedPreMiddleware, recommendedErrorHandlers } from "@saf/node-express";
import express from "express";
const app = express();
app.set("trust proxy", true);

/**
 * Pre-route Middleware Stack
 * Includes request ID, logging, body parsing, and OpenAPI validation
 */
app.use(recommendedPreMiddleware);

/**
 * Routes
 * API endpoints for various resources
 */
// app.use("/route-prefix", routeHandler);

/**
 * Error Handling Middleware Stack
 * Includes 404 handler and centralized error handling
 */
app.use(recommendedErrorHandlers);

export default app;
