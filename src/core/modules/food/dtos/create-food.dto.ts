import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
