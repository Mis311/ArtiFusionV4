import { Controller, Get, Req, Res } from '@nestjs/common';
import { ViewService } from './view.service';
import { Request, Response } from 'express';

@Controller()
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get('*')
  static(@Req() req: Request, @Res() res: Response) {
    const handle = this.viewService.getNextServer().getRequestHandler()
    handle(req, res)
  }
}
