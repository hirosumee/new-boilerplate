import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { UsersService } from './services/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),JwtModule.register({
    secretOrPrivateKey: process.env.secretkey,
    signOptions: {
      expiresIn: 3600 * 24,
    },
  })],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
