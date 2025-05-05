import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialMediaTypeService } from './social-media-type.service';
import { CreateSocialMediaTypeDto } from './dto/create-social-media-type.dto';
import { UpdateSocialMediaTypeDto } from './dto/update-social-media-type.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SocialMediaType } from './models/social-media-type.model';

@Controller("social-media-type")
export class SocialMediaTypeController {
  constructor(
    private readonly socialMediaTypeService: SocialMediaTypeService
  ) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: SocialMediaType,
  })
  @Post()
  create(@Body() createSocialMediaTypeDto: CreateSocialMediaTypeDto) {
    return this.socialMediaTypeService.create(createSocialMediaTypeDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Social Media Types",
    type: [SocialMediaType],
  })
  @Get()
  findAll() {
    return this.socialMediaTypeService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "type",
    type: SocialMediaType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.socialMediaTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update SocialMediaType",
    type: SocialMediaType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSocialMediaTypeDto: UpdateSocialMediaTypeDto
  ) {
    return this.socialMediaTypeService.update(+id, updateSocialMediaTypeDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "SocialMediaType",
    type: SocialMediaType,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.socialMediaTypeService.remove(+id);
  }
}
