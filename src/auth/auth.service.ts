import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  create(loginUserDto: LoginUserDto) {
    return 'This action adds a new auth';
  }

  register(createUserDto: CreateUserDto) {
    return `This action returns all auth`;
  }
}
