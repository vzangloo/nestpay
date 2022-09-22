-- CreateEnum
CREATE TYPE "TxnStatus" AS ENUM ('PENDING', 'FAILED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "txn_status" "TxnStatus" NOT NULL DEFAULT 'PENDING';
