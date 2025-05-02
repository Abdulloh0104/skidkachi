import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ActivateAdminDto } from "./dto/activate-admin.dto";
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Admin } from "./models/admin.model";
// import { JwtAuthGuard } from "../common/guard/jwt-auth.guard";
// import { JwtSelfGuard } from "../common/guard/jwt-self.guard";
// import { JwtAdminSelfGuard } from "../common/guard/jwt-adminSelf.guard";

@Controller("admin")
  export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "CREATE" })
    @ApiResponse({
      status: 200,
      description: "Activation",
      type: Admin,
    })
    @Post()
    create(@Body() createAdminDto: CreateAdminDto) {
      return this.adminService.create(createAdminDto);
    }

    @ApiBearerAuth()
    // @HttpCode(HttpStatus.OK)
    // @Roles("SUPERADMIN")
    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "GET ALL" })
    @ApiResponse({
      status: 200,
      description: "List of Admins",
      type: [Admin],
    })
    @Get()
    findAll() {
      return this.adminService.findAll();
    }

    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    // @Roles("ADMIN")
    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAdminSelfGuard)
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "GET One By Id" })
    @ApiResponse({
      status: 200,
      description: "Admin",
      type: Admin,
    })
    @Get(":id")
    findOne(@Param("id") id: string) {
      return this.adminService.findOne(+id);
    }

@ApiOperation({
      summary: "Bitta admin ma'lumotlarini olish email orqali olish",
    })
    @ApiResponse({
      status: 200,
      description: "Get one admin",
      type: Admin,
    })
    @Post(":email")
    findByEmail(@Param("email") email: string) {
      return this.adminService.findByEmail(email);
    }


    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    // @UseGuards(JwtAdminSelfGuard)
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "UPDATE" })
    @ApiResponse({
      status: 200,
      description: "Update Admin",
      type: Admin,
    })
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
      return this.adminService.update(+id, updateAdminDto);
    }

    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    // @UseGuards(JwtAdminSelfGuard)
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "DELETE" })
    @ApiResponse({
      status: 200,
      description: "Delete Admin",
      type: "Deleted",
    })
    @Delete(":id")
    remove(@Param("id") id: string) {
      return this.adminService.remove(+id);
    }

    @ApiOperation({ summary: "Activate" })
    @ApiResponse({
      status: 200,
      description: "Activate Admin",
      type: "Activated",
    })
    @Post("activate-admin")
    async activateAdmin(@Body() activateAdminDto: ActivateAdminDto) {
      return this.adminService.activateAdmin(activateAdminDto);
    }
  }
