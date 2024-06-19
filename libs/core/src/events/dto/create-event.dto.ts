import {
  IsString,
  IsDateString,
  IsInt,
  IsPositive,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
