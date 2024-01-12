import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto, UpdateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UserService } from "../service/userLogin.service";

@ApiTags('登录人员')
@Controller('user')
export class UserLoginController{
    constructor(private readonly userService:UserService){}
    
    @ApiResponse({ type: User })
    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/create')
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto as User);
    }

    @ApiResponse({ type: [User] })
    @UseInterceptors(ClassSerializerInterceptor)
    // @Roles('admin')
    // @UseGuards(JwtAuthGuard,RolesGuard)
    @Get('findAll')
    async findAll() {
      return this.userService.findAll();
    }
  
    @ApiResponse({ type: User })
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('find:id')
    async findOne(@Param('id', ParseIntPipe) id: string) {
      return this.userService.findOne(+id);
    }
  
    @ApiBody({ type: UpdateUserDto })
    @ApiResponse({ type: User })
    @Patch('edit:id')
    async update(
      @Param('id', ParseIntPipe) id: string,
      @Body() updateUserDto: UpdateUserDto,
    ) {
      return this.userService.update(+id, updateUserDto);
    }
  
    @Delete('delete:id')
    async remove(@Param('id', ParseIntPipe) id: string) {
      return this.userService.remove(+id);
    }

    @Post('pageAll')
    async pageAll(@Body() post:any):Promise<any>{
      
    }


}