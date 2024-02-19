import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { ReportTemplate } from "../entites/drReportTemplate.entity";
import { ReportTemplateField } from "../entites/reportTemplateField.entity";
import { AddReportTemplateDto } from "../dtos/addReportTemplate.dto";
import { HttpException } from "@nestjs/common";

export class ReportTemplateService {

    constructor(
        @InjectRepository(ReportTemplate) private reportTemplateRepository: Repository<ReportTemplate>,
        @InjectRepository(ReportTemplateField) private reportFieldRepository: Repository<ReportTemplateField>,
    ) {
    }


    public async addTemplate(addReportTemplateDto: AddReportTemplateDto) {
        try {

            let {drReportTemplate , drReportTemplateFields} = addReportTemplateDto.drReportTemplate.id ? await this.editReportTemplateAndField(addReportTemplateDto) : await this.newReportTemplateAndNewField(addReportTemplateDto)

            return {
                drReportTemplate: drReportTemplate,
                drReportTemplateFields: drReportTemplateFields
            };
        } catch (error) {
            console.error(error)
            throw new HttpException(error, 200);
        }
    }


    /**
    * 新增考勤组模板以及新增模板字段 
    */
    private async newReportTemplateAndNewField(addReportTemplateDto: AddReportTemplateDto) {
        const drReportTemplate = await this.reportTemplateRepository.save(addReportTemplateDto.drReportTemplate as any);
        addReportTemplateDto.drReportTemplateFields.forEach((i: any) => {
            i.fieldId = drReportTemplate.id
        })
        const drReportTemplateFields = await this.reportFieldRepository.save(addReportTemplateDto.drReportTemplateFields as any);

        return {
            drReportTemplate: drReportTemplate,
            drReportTemplateFields: drReportTemplateFields
        };
    }

    /**
     * 编辑考勤组模板以及编辑模板字段 
     */
    private async editReportTemplateAndField(addReportTemplateDto: AddReportTemplateDto) {

        const { drReportTemplateParmas , drReportTemplateFieldsParams } :any = addReportTemplateDto

        const drReportTemplate = await this.reportTemplateRepository.update(drReportTemplateParmas.id ,drReportTemplateParmas as any);

        const drReportTemplateFields = await this.reportFieldRepository.update( {id:In(drReportTemplateFieldsParams.map((i:any)=>i.id))} ,drReportTemplateFieldsParams as any);

        return {
            drReportTemplate: drReportTemplate,
            drReportTemplateFields: drReportTemplateFields
        };
    }

}