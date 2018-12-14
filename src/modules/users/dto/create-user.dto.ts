import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class UserDto {
    @IsString()
    readonly fullname: string;
    @IsEmail()
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    readonly password: string;
    @IsPhoneNumber('+84')
    readonly phone: string;
}
