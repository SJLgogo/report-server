import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReportTemplateField {
    @ApiProperty({ description: 'id' })
    @PrimaryGeneratedColumn()  
    id:number

    @Column()
    category: FieldCategory;

    @Column({ default: '' })
    defaultValue: string;

    @Column()
    express: string;

    @Column()
    fieldGroupKey: string;

    @Column()
    fieldGroupName: string;

    @Column()
    fieldId: string;

    @Column()
    fieldKey: string;

    @Column({ default: 0 })
    fieldLength: number;

    @Column()
    fieldTypes: string;

    @Column()
    label: string;
}


export type FieldCategory = 'entity' | 'logic'