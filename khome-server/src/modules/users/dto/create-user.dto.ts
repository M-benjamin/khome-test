import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'firstname of user' })
  readonly firstname: string;

  @IsString()
  @ApiProperty({ description: 'lastname of user' })
  readonly lastname: string;

  @IsString()
  @ApiProperty({ description: 'email of user' })
  readonly email: string;
}
