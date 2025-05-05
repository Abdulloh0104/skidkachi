import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreSocialLinkService } from './store-social-link.service';
import { CreateStoreSocialLinkDto } from './dto/create-store-social-link.dto';
import { UpdateStoreSocialLinkDto } from './dto/update-store-social-link.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StoreSocialLink } from './models/store-social-link.model';

@Controller("store-social-link")
export class StoreSocialLinkController {
  constructor(
    private readonly storeSocialLinkService: StoreSocialLinkService
  ) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: StoreSocialLink,
  })
  @Post()
  create(@Body() createStoreSocialLinkDto: CreateStoreSocialLinkDto) {
    return this.storeSocialLinkService.create(createStoreSocialLinkDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of StoreSocialLinks",
    type: [StoreSocialLink],
  })
  @Get()
  findAll() {
    return this.storeSocialLinkService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "StoreSocialLink",
    type: StoreSocialLink,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.storeSocialLinkService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update StoreSocialLink",
    type: StoreSocialLink,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateStoreSocialLinkDto: UpdateStoreSocialLinkDto
  ) {
    return this.storeSocialLinkService.update(+id, updateStoreSocialLinkDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Deleted",
    type: StoreSocialLink,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.storeSocialLinkService.remove(+id);
  }
}
