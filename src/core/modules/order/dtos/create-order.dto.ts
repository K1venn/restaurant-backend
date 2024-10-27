import { IsArray, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsArray()
  foodIds: number[];
}
