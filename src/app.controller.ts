import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:8999/app
  @Get()
  getHello(): string {
    return 'getHello';
  }

  // @Post('list')
  // create(): string {
  //   return 'create';
  // }

  // // 2.通配符路径(?+* 三种通配符 )
  // // 可以匹配到 get请求, http://localhost:8999/app/user_xxx
  // @Get('user_*')
  // getUser() {
  //   return 'getUser';
  // }

  // @Put('list/user')
  // updateUser() {
  //   return 'updateUser';
  // }

  // // 3.带参数路径
  // // 可以匹配到put请求，http://localhost:8999/app/list/xxxx
  // @Put('list/:id')
  // update() {
  //   return 'update';
  // }
}
