import Express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { json } from "body-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import morgan from "morgan";

const app = Express();
// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
// 1) GLOBAL MIDDLEWARES
app.use(morgan("dev"));

// Set secuirty HTTP headers
app.use(helmet()); // add more headers like X-XSS-Protection to prevent reflected XSS attacks,

// Implement CORS
app.use(cors()); //server to be accessible by other origins (domains).

// bodyParser, read data from body to req.body
app.use(json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Proxy
app.set("trust proxy", true); //for reverse proxy

// Not found route
app.all("*", async (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError());
});

// Error handler
app.use(errorHandler);
export { app };
