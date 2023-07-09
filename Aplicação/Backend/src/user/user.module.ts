import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [userController],
  providers: [UserService],
})
export class UserModule {}
