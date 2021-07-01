import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from '../../core/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UserDTO } from '../users/user.dto';
import { DoesUserExist } from '../../core/guards/user-exists.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserDTO) {
    return this.authService.create(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
