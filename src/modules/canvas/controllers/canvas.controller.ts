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
        console.log('canvasSave',canvasSave);
        return this.canvasService.addTemplate(canvasSave)
    }


}