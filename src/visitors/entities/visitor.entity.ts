import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Visitor {
    @ApiProperty({
        description: 'Identificador único do visitante',
        example: 1,
        type: 'number'
    })
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty({
        description: 'Nome completo do visitante',
        example: 'João Silva Santos',
        type: 'string'
    })
    @Column()
    name!: string;

    @ApiProperty({
        description: 'Email do visitante',
        example: 'joao@example.com',
        type: 'string',
        format: 'email'
    })
    @Column()
    email!: string;

    @ApiProperty({
        description: 'Data da visita',
        example: '2026-05-26T10:30:00Z',
        type: 'string',
        format: 'date-time'
    })
    @Column()
    visitDate!: Date;
}
