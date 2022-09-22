-- CreateIndex
CREATE INDEX "Merchant_status_idx" ON "Merchant"("status");

-- CreateIndex
CREATE INDEX "Transaction_user_id_idx" ON "Transaction"("user_id");

-- CreateIndex
CREATE INDEX "Transaction_merchant_id_idx" ON "Transaction"("merchant_id");

-- CreateIndex
CREATE INDEX "Transaction_type_code_idx" ON "Transaction"("type_code");

-- CreateIndex
CREATE INDEX "Transaction_txn_id_idx" ON "Transaction"("txn_id");

-- CreateIndex
CREATE INDEX "User_status_idx" ON "User"("status");
