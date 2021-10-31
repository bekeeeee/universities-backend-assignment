import { Validate } from "../utils/validate";

export class UpdateProgramDto {
  constructor(
    public readonly id: string,
    public readonly school?: string,
    public readonly program?: string,
    public readonly location?: string,
    public readonly length?: number
  ) {}

  static from(body: Partial<UpdateProgramDto>) {
    if (!body.id) {
      throw new Error("missing id property");
    }
    if (body.school) {
      Validate.validateStringSize(body.school, 5, "school");
    }
    if (body.program) {
      Validate.validateStringSize(body.program, 5, "program");
    }
    if (body.location) {
      Validate.validateStringSize(body.location, 5, "location");
    }
    if (body.length) {
      Validate.validateNumberSize(body.length, 0, "length");
    }

    return new UpdateProgramDto(
      body.id,
      body.school,
      body.program,
      body.location,
      body.length
    );
  }
}
