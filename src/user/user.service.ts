import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  chargeCreditCard(amount: number) {
    if (this.hasValidCreditCard()) {
      // request Credit Card API to charge the amount
      // assume charge credit card success.

      return { 
        status: 'success',
        message: 'Charge credit card successfully'
      };
    }

    return { status: 'failed', error: 'Cannot charge credit card' };
  }


  hasValidCreditCard(): boolean {
    return true;
  }

  hasSufficientBalance(credit: number): boolean {
    return true;
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id }});
  }

}
