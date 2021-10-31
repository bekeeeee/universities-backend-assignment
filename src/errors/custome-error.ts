export abstract class CustomeError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomeError.prototype); //set instanse of CustomerError to Error
  }
  abstract serializeErrors(): { message: string; field?: string };
}
