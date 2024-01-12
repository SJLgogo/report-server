import { FieldCategory } from "../entites/reportTemplateField.entity";

export interface AddReportTemplateDto{

    drReportTemplate: ReportTemplate;

    drReportTemplateFields:ReportTemplateField[]
}


export interface ReportTemplate{
    code:string;

    name:string;

    id?:string;

    jsonSchema:string;
}


export interface ReportTemplateField{

 
    category: FieldCategory;
 
    defaultValue: string;
    
    express: string;
    
    fieldGroupKey: string;

    fieldGroupName: string;
    
    fieldId: string;

    fieldKey: string;

    fieldLength: number;
    
    fieldTypes: string;
    
    label: string;
}

