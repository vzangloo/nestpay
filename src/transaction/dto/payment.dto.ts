import {
    IsNotEmpty,
    IsString,
    IsDateString,
    IsNumberString,
    IsOptional,
} from 'class-validator';

export class PaymentDto {

    @IsNotEmpty()
    @IsNumberString()
    readonly user_id: string;

    @IsNotEmpty()
    @IsNumberString()
    readonly merchant_id: string;

    @IsNotEmpty()
    @IsString()
    readonly txn_id: string; 

    @IsDateString()
    readonly txn_datetime: string;

    @IsNotEmpty()
    readonly credit: number = 0.00;

    @IsOptional() 
    @IsString()
    readonly remark?: string | null; 

    @IsNotEmpty()
    @IsString()
    readonly type_code: string;
}