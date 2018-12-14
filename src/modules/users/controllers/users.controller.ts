import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { IUser } from '../../auth/interface/user.interface';
import { IJwtPayload } from '../../auth/interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dto/login-user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}
	@Get()
	@UseGuards(AuthGuard('jwt'))
	findAll() {
		return this.usersService.findAll();
	}
	@Post('/signIn')
	async createOne(@Body() body: UserDto, @Res() res) {
		try {
			let user = await this.usersService.findOneByEmail(body.email);
			if (user) {
				console.log('email đã được sử dụng !');
				return res.end();
			}
			let hashPassword = bcrypt.hashSync(body.password, 5);
			await this.usersService.create({ ...body, password: hashPassword });
		} catch (e) {
			console.log(e);
		}
		return res.redirect('/');
	}
	@Post('/login')
	async login(@Body() payload: LoginUserDto, @Res() res) {
		let userInfo = await this.usersService.findOneByEmail(payload.email);
		let hashPassword = userInfo.password;
		let result = bcrypt.compareSync(payload.password, hashPassword);
		if (result) {
			const userJ: IJwtPayload = payload;
			let token =  this.jwtService.sign(userJ);
			res.cookie = res.cookie('jwt', token, { httpOnly: true});
			return res.redirect('/users')
		}
		return res.redirect('/');
	}
}
