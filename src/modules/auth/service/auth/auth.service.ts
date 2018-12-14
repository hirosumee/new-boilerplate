import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../../users/services/users.service';
import { IUser } from '../../interface/user.interface';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '../../interface/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService, private  readonly jwtService: JwtService) {

	}
	async validateUser(payload: IJwtPayload): Promise<any> {
			return this.usersService.findOneByEmail(payload.email);
	}
}
