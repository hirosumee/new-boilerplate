import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './modules/config/config.module';
import { UsersModule } from './modules/users/users.module';
import { HelpersModule } from './modules/helpers/helpers.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [ConfigModule, MongooseModule.forRoot(process.env.MONGO_CT), UsersModule, HelpersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
