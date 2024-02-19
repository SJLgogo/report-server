import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CanvasTemplate } from "../entities/canvasTemplate.entity";
import { CanvasSave } from "../dto/canvas.dto";

export class CanvasService{

    constructor(
        @InjectRepository(CanvasTemplate) private reportTemplateRepository: Repository<CanvasTemplate>,
    ){
    }

    async addTemplate(canvasSave:CanvasSave){
        console.log(canvasSave);
        return true
    }


}