const { Router } = require("express");
const clientRouter = require("./clientRouter");
const bankAccountRouter = require("./bankAccountRouter");
const transactionRouter = require("./transactionRouter");
const router = new Router();

router.use("/api/clients", clientRouter);
router.use("/api/bankaccounts", bankAccountRouter);
router.use("/api/transactions", transactionRouter);

module.exports = router;
