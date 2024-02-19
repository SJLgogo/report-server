import { Body, Controller, Post } from "@nestjs/common";
import { CanvasService } from "../service/canvas.service";
import { CanvasSave } from "../dto/canvas.dto";

@Controller('canvas')
export class CanvasController{

    constructor(private readonly canvasService:CanvasService){}


    @Post('/add-template')
    async create(
        @Body() canvasSave: CanvasSave,
    ) {
        return this.canvasService.addTemplate(canvasSave)
    }


    @Post('/findByType')
    async findByType(
        @Body() post: {type:string},
    ) {
        return this.canvasService.findByType(post.type)
    }


    

}