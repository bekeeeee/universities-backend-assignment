export class GetProgramDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<GetProgramDto>) {
    if (!body.id) {
      throw new Error('missing id property')
    }

    return new GetProgramDto(body.id)
  }
}
