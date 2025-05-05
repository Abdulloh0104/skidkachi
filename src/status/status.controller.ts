import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Status } from './models/status.model';

@Controller("status")
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Status,
  })
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Statuses",
    type: [Status],
  })
  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Status",
    type: Status,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.statusService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update Status",
    type: Status,
  })
  @Patch(":id")
  update(@Param("id") id: string,
  @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Status Region",
    type: Status,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.statusService.remove(+id);
  }
}
