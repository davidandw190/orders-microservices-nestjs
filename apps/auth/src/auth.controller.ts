import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { JwtAuthGuard } from '@app/common/auth/jwt.auth.guard';
import { User } from './users/schemas/user.schema';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @Post('login')
 async login(user: User, @Res({ passthrough: true })response: Response) {
  await this.authService.login(user, response);
  response.send(user);
 }

 @UseGuards(JwtAuthGuard)
 @MessagePattern('validate_user')
 async validateUser(user: User) {
   return user;
 }
}
