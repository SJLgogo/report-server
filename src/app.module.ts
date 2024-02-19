import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/exception/http.exception';
import { libModules } from './config/database/database.config';
import { ReportModule } from './modules/report/report.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CanvasModule } from './modules/canvas/canvas.module';


const modules = [
  ReportModule,
  UserModule,
  AuthModule,
  CanvasModule
]


const exceptions =[
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
]

@Module({
  imports: [...modules , ...libModules],
  controllers: [],
  providers: [...exceptions], 
})
export class AppModule {}
