import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AddReportTemplateDto } from "../dtos/addReportTemplate.dto";

@ApiTags('报表模板')
@Controller('report/drReportTemplate')
export class drReportTemplateController {
    constructor(){}

    @Post('/add-template')
    async create(@Body() addReportTemplateDto:AddReportTemplateDto) {
        console.log(addReportTemplateDto);
        return true
    }


}