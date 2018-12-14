import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class LoginUserDto{
	@IsEmail()
	readonly email: string;
	@IsString()
	@IsNotEmpty()
	readonly password: string;
}
