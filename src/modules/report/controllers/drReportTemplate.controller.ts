import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AddReportTemplateDto } from "../dtos/addReportTemplate.dto";
import { ReportTemplateService } from "../services/reportTemplate.service";
import { Transaction } from "typeorm";

@ApiTags('报表模板')
@Controller('report/drReportTemplate')
export class drReportTemplateController {
    constructor(
        private reportTemplateService:ReportTemplateService
    ){}

    @Post('/add-template')
    async create(
        @Body() addReportTemplateDto:AddReportTemplateDto ,
    ) {
        return this.reportTemplateService.addTemplate(addReportTemplateDto)
    }


    @Post('page-all')
    async pageAll(
        @Body() post:{page:number , pageSize:number}
    ){
        return true
    }



}