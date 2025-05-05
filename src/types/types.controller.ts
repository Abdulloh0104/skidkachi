import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Types } from './models/type.model';

@Controller("types")
export class TypesController {
  constructor(private readonly typesService: TypesService) {}
  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Types,
  })
  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Roles",
    type: [Types],
  })
  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Role",
    type: Types,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.typesService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update user",
    type: Types,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Delete Types",
    type: "Deleted",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typesService.remove(+id);
  }
}
