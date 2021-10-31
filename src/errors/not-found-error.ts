import { CustomeError } from "./custome-error";

export class NotFoundError extends CustomeError {
  statusCode = 404;
  reason = "Route not found";
  constructor() {
    super("Route not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return { message: this.reason };
  }
}
