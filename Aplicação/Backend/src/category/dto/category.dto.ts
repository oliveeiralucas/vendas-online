import { IsNotEmpty, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
