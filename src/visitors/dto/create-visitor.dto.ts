import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVisitorDto {
    @ApiProperty({
        description: 'Nome completo do visitante',
        example: 'João Silva Santos',
        minLength: 3,
        maxLength: 255
    })
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    @IsString({ message: 'Nome deve ser uma string' })
    name!: string;

    @ApiProperty({
        description: 'Endereço de email válido do visitante',
        example: 'joao@example.com',
        format: 'email'
    })
    @IsEmail({}, { message: 'Email deve ser válido' })
    email!: string;

    @ApiProperty({
        description: 'Número de telefone do visitante',
        example: '(11) 98765-4321',
        pattern: '^\\(?[0-9]{2}\\)? ?9?[0-9]{4}-?[0-9]{4}$'
    })
    @IsNotEmpty({ message: 'Telefone é obrigatório' })
    phone!: string;

    @ApiProperty({
        description: 'Quantidade de visitas do visitante',
        example: 5,
        type: 'number'
    })
    @IsNumber()
    quantityOfVisits!: number;

    @ApiProperty({
        description: 'Nome da igreja do visitante',
        example: 'Igreja Batista Central'
    })
    @IsOptional()
    @IsString()
    churchName!: string;

    @ApiProperty({
        description: 'Data da visita do visitante',
        example: '2023-10-10',
        format: 'date'
    })
    @IsOptional()
    @IsDateString()
    visitDate!: string;

}
