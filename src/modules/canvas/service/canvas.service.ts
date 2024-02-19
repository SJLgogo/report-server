import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CanvasTemplate } from "../entities/canvasTemplate.entity";
import { CanvasSave } from "../dto/canvas.dto";
import { HttpException, HttpStatus } from "@nestjs/common";

export class CanvasService{

    constructor(
        @InjectRepository(CanvasTemplate) private reportTemplateRepository: Repository<CanvasTemplate>,
    ){
    }

    async addTemplate(canvasSave:CanvasSave){
        try 
        {
            if(canvasSave.id){
               return await this.reportTemplateRepository.update({ id: canvasSave.id as any }, canvasSave as any as CanvasTemplate);
            }
            return this.reportTemplateRepository.save(canvasSave as any as CanvasTemplate);
        } catch (error) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async findByType(type:string){
        return this.reportTemplateRepository.find({where:{type}})
    }




}