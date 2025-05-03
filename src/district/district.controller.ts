import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: District,
  })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Regions",
    type: [District],
  })
  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Region",
    type: District,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update Region",
    type: District,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Delete Region",
    type: District,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
