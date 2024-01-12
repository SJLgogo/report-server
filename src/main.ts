import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor())  // 全局拦截器
  app.enableCors() 
  app.useGlobalPipes(new ValidationPipe({
    transform:true, 
    whitelist:true,   
  }));
  await app.listen(4199 ,'192.168.31.211');
}
bootstrap();
