import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Region } from './models/region.model';

@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Region,
  })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Regions",
    type: [Region],
  })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Region",
    type: Region,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update Region",
    type: Region,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Delete Region",
    type: Region,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(+id);
  }
}
