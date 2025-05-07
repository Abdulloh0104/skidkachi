import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { MediaService } from "./media.service";
import { CreateMediaDto } from "./dto/create-media.dto";
import { UpdateMediaDto } from "./dto/update-media.dto";

@Controller("media")
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get(":id") //xatolik
  findOne(@Param("id") id: string) {
    return this.mediaService.findOne(+id);
  }

  @Get(":tableName")
  findAllByTableName(@Param("tableName") tableName: string) {
    return this.mediaService.findAllByTableName(tableName);
  }

  @Get("table/:table/id/:id")
  findOneByTableIdName(@Param("table") table: string, @Param("id") id: string) {
    return this.mediaService.findOneByTableIdName(table, +id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.mediaService.remove(+id);
  }
}
