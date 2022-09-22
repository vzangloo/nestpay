import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsDateString,
    IsNumberString,
} from 'class-validator';

export class ReloadDto {
    @IsNotEmpty()
    @IsNumberString()
    readonly user_id: string;

    @IsNumberString()
    merchant_id: string;

    @IsString()
    txn_id: string; 

    @IsDateString()
    txn_datetime: string;

    @IsNotEmpty()
    readonly debit: number = 0.00;

    @IsOptional() 
    @IsString()
    readonly remark?: string | null; 

    @IsNotEmpty()
    @IsString()
    readonly type_code: string;


    setMerchantId(id: string) {
        this.merchant_id = id;
    }
}