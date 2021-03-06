import { ValidationException } from "../../errors/validation-error";

export class Validate {
  static validateEmail(email: string): void {
    if (!email) {
      throw new ValidationException("Missing property email");
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) throw new ValidationException("Invalid Email");
  }
  static validateStringSize(
    input: string,
    size: number,
    propName: string
  ): void {
    if (!input) {
      throw new ValidationException(`Missing property ${propName}`);
    }
    if (typeof input !== "string") {
      throw new ValidationException(`${propName} must be string`);
    }
    if (input.length < size)
      throw new ValidationException(
        `${propName} must be more than ${size} character`
      );
  }

  static validateNumberSize(
    input: number,
    size: number,
    propName: string
  ): void {
    if (!input) {
      throw new ValidationException(`Missing property ${propName}`);
    }
    if (typeof input !== "number") {
      throw new ValidationException(`${propName} must be number`);
    }
    if (input < size)
      throw new ValidationException(`${propName} must be bigger than ${size}`);
  }

  static validateEnum(input: string, arr: string[], propName: string): void {
    if (!input) {
      throw new ValidationException(`Missing property ${propName}`);
    }

    if (!arr.includes(input)) {
      throw new ValidationException(`${propName} must be one of ${arr}`);
    }
  }
}
