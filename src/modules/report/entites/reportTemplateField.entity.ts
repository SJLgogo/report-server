import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReportTemplate } from "./drReportTemplate.entity";

@Entity()
export class ReportTemplateField extends BaseEntity {
    @ApiProperty({ description: 'id' })
    @PrimaryGeneratedColumn()  
    id:number

    @Column()
    category: FieldCategory;

    @Column({ default: '' })
    defaultValue: string;

    @Column({ default: '' })
    express: string;

    @Column({ default: '' })
    fieldGroupKey: string;

    @Column({ default: '' })
    fieldGroupName: string;

    @Column()
    fieldId:string;

    @Column()
    fieldKey: string;

    @Column({ default: 0 })
    fieldLength: number;

    @Column()
    fieldTypes: string;

    @Column()
    label: string;

    // @ManyToOne(()=>ReportTemplate , reportTemplate=>reportTemplate.reportTemplateFields)
    // reportTemplate: ReportTemplate;
}


export type FieldCategory = 'entity' | 'logic'