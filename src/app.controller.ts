import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res) {
    res.sendFile(path.resolve(__dirname,'../../../../','public/index.html'))
  }
}
