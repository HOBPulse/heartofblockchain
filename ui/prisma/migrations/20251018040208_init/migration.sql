-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "target_amount" BIGINT NOT NULL,
    "amount_donated" BIGINT NOT NULL,
    "mint" TEXT NOT NULL,
    "threshold_reached" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);
