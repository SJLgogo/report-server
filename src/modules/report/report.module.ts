import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportTemplate } from './entites/drReportTemplate.entity';
import { ReportTemplateField } from './entites/reportTemplateField.entity';
import { drReportTemplateController } from './controllers/drReportTemplate.controller';
import { ReportTemplateService } from './services/reportTemplate.service';

@Module({
    controllers:[drReportTemplateController],
    providers:[ReportTemplateService],
    imports:[TypeOrmModule.forFeature([ReportTemplate , ReportTemplateField])],
    exports:[ReportTemplateService]
})
export class ReportModule {}
