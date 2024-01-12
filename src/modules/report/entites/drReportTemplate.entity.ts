import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReportTemplate {
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
    
}