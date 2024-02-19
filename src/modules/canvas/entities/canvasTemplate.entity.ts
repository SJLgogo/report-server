import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CanvasTemplate  extends BaseEntity  {
    @ApiProperty({ description: 'id' })
    @PrimaryGeneratedColumn()  
    id:number

    @ApiProperty({ description: 'canvas类型' })
    @Column()
    type: string;

    @ApiProperty({ description: 'json' })
    @Column('text')
    jsonSchema: string;
    
}