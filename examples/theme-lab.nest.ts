import { Body, Controller, Get, Injectable, Param, Post } from "@nestjs/common";

interface CreateProgramDto {
  readonly title: string;
  readonly ownerId: string;
}

@Injectable()
export class ProgramService {
  private readonly programs = new Map<string, CreateProgramDto>();

  create(id: string, dto: CreateProgramDto) {
    this.programs.set(id, dto);
    return { id, ...dto, status: "syncing" as const };
  }

  findOne(id: string) {
    return this.programs.get(id) ?? null;
  }
}

@Controller("programs")
export class ProgramController {
  constructor(private readonly service: ProgramService) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Post(":id")
  create(@Param("id") id: string, @Body() dto: CreateProgramDto) {
    return this.service.create(id, dto);
  }
}
