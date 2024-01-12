import { Module } from '@nestjs/common';
import { UserLoginController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './service/userLogin.service';

@Module({
    controllers:[UserLoginController],
    providers:[UserService],
    imports:[TypeOrmModule.forFeature([User])],
    exports:[UserService]
})
export class UserModule {}
