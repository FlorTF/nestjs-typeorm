import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  getUsers(){
    return this.userRepository.find()
  }
}
