import {  IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateVisitorDto {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsNotEmpty()
    phone!: string;
}
