import { CustomeError } from "./custome-error";
export class ValidationException extends CustomeError {
  statusCode = 422;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ValidationException.prototype); // set instanse of ValidationException to CustomerError
  }
  serializeErrors() {
    return { message: this.message };
  }
}
