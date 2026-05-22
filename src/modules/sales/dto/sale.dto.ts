import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateSaleDto {
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty()
    customer_id: number;

    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    user_id: number;

    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty()
    vehicle_id: number;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({ example: '2023-12-31' })
    sale_date: Date;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty({ example: 15000.00 })
    total_amount: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({ example: 'Credit Card' })
    payment_method: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({ example: 'Completed' })
    status: string;
}

export class UpdateSaleDto extends PartialType(CreateSaleDto) {}
