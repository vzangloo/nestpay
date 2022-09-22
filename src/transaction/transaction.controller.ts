import { Controller, Get, Post, Body, Param, Version, ForbiddenException } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { UserService } from 'src/user/user.service';
import { ReloadDto, PaymentDto } from './dto';

@Controller('transaction')
export class TransactionController {
  constructor(private transaction: TransactionService, private user: UserService) {}

  @Version('1')
  @Post('reload')
  reload(@Body() dto: ReloadDto) {

    if (dto.type_code === 'CREDIT_CARD') {
      let result = this.user.chargeCreditCard(dto.debit);
      if (result.status === 'failed') {
        throw new ForbiddenException(); 
      }
    }

    return this.transaction.reload(dto);
  }

  @Version('1')
  @Post('pay')
  pay(@Body() dto: PaymentDto) {

    if (this.user.hasSufficientBalance(dto.credit)) {
      return this.transaction.pay(dto);
    } else {
      return {
        status: 'failed',
        message: 'Insufficient balance'
      }
    }
  }

  @Version('1')
  @Get('user-balance/:id')
  balance(@Param('id') id: number) {
    return this.transaction.userBalance(id);
  }

}
