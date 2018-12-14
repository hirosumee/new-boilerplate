import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './service/auth/auth.service';
import { HttpStrategy } from './service/auth/http.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './service/auth/jwt.strategy';


@Module({
	imports: [UsersModule,PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.register({
		secretOrPrivateKey: process.env.secretkey,
		signOptions: {
			expiresIn: 3600 * 24
		}
	})],
	providers: [AuthService,HttpStrategy, JwtStrategy],
})
export class AuthModule {}
