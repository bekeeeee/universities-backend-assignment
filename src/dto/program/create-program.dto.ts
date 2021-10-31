import { Validate } from "../utils/validate";

export class CreateProgramDto {
  constructor(
    public readonly school: string,
    public readonly program: string,
    public readonly location: string,
    public readonly length: number
  ) {}

  static from(body: Partial<CreateProgramDto>) {
    Validate.validateStringSize(body.school!, 5, "school");
    Validate.validateStringSize(body.program!, 5, "program");
    Validate.validateStringSize(body.location!, 5, "location");
    Validate.validateNumberSize(body.length!, 0, "length");

    return new CreateProgramDto(
      body.school!,
      body.program!,
      body.location!,
      body.length!
    );
  }
}
