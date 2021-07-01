import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../model/user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(user: UserDTO): Promise<User> {
    return this.userRepo.save(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { username } });
  }
}
