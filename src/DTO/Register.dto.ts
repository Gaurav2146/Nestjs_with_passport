
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDTO {
    @IsNotEmpty()
    userName: string;
    @IsNotEmpty()
    password: string;
    @IsEmail()
    email: string;
}