import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({ example: 'John' })
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({ example: 'Doe' })
    last_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({ example: '123456789' })
    document_number: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({ example: '+1234567890' })
    phone: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '123 Main St, City, Country' })
    address: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
