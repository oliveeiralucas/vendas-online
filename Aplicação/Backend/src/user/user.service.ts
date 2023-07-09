import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(CreateUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...CreateUserDto,
      password: passwordHashed,
    });
  }
  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
