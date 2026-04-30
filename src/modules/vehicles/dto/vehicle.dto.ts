<<<<<<< HEAD
export class VehicleDto {}
=======
import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @ApiProperty()
  model?: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  vin: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  year?: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  color: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  mileage?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  price: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  status: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}
>>>>>>> f88a7f3 (firts commit class 4)
