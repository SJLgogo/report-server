import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanvasTemplate } from './entities/canvasTemplate.entity';
import { CanvasController } from './controllers/canvas.controller';
import { CanvasService } from './service/canvas.service';

@Module({
    controllers:[CanvasController],
    imports:[TypeOrmModule.forFeature([CanvasTemplate])],
    providers:[CanvasService],
    exports:[]
})
export class CanvasModule {}
