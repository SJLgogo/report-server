import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReportTemplateField } from "./reportTemplateField.entity";

@Entity()
export class ReportTemplate extends BaseEntity  {
    @ApiProperty({ description: 'id' })
    @PrimaryGeneratedColumn()  
    id:number


    @ApiProperty({ description: '报表Code' })
    @Column()
    code: string;

    @ApiProperty({ description: '报表姓名' })
    @Column()
    name: string;

    @ApiProperty({ description: '报表json' })
    @Column('text')
    jsonSchema: string;
    
    // @OneToMany(()=>ReportTemplateField ,(fildes)=>fildes.fieldKey)
    // reportTemplateFields:ReportTemplateField[]

}