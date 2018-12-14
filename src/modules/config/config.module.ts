import { Module, Global } from '@nestjs/common';
import { DotEnvService } from './services/.envService/.env.service';
import * as dotenv from 'dotenv';
// init dotenv
dotenv.config();
// end init dotenv
@Global()
@Module({
    imports: [],
    providers: [],
    exports: [],
})
export class ConfigModule {}
