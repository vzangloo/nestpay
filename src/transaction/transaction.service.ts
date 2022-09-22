import { ForbiddenException, Injectable } from '@nestjs/common';
import { ReloadDto, PaymentDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TransactionService {

  constructor(private prisma: PrismaService, private user: UserService) {}

  async reload(reload: ReloadDto) {

    try {
      const transaction = await this.prisma.transaction.create({
        data: {
          user_id: parseInt(reload.user_id),
          merchant_id: parseInt(reload.merchant_id),
          type_code: reload.type_code,
          debit: reload.debit,
          txn_id: reload.txn_id,
          txn_datetime: new Date(reload.txn_datetime),
        }
      });

      return transaction;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Duplicate record');
        }
      }
    }
  }

  async pay(payment: PaymentDto) {
    try {
      const transaction = await this.prisma.transaction.create({
        data: {
          user_id: parseInt(payment.user_id),
          merchant_id: parseInt(payment.merchant_id),
          type_code: payment.type_code,
          credit: payment.credit,
          txn_id: payment.txn_id,
          txn_datetime: new Date(payment.txn_datetime),
        }
      });

      return transaction;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Duplicate record');
        }
      }
    }
  }

  userBalance(id: number) {
    let user = this.user.findOne(id);

    console.log(user);
  }
}
