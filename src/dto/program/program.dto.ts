import { IProgram } from "../../models/Program-model";

export class ProgamDto {
  constructor(
    public readonly id: string,
    public readonly school: string,
    public readonly program: string,
    public readonly location: string,
    public readonly length: number,

    public readonly createdAt: Date
  ) {}

  static from(entity: IProgram) {
    return new ProgamDto(
      entity._id,
      entity.school,
      entity.program,
      entity.location,
      entity.length,
      entity.createdAt
    );
  }

  static fromMany(programs: IProgram[]) {
    return programs.map((program) => ProgamDto.from(program));
  }
}
