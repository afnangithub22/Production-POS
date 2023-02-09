const express = require('express');
const {

    addBillsController,
    getBillsController,
    deleteBillsController
  } = require("./../controllers/billsController");
const router =  express.Router()

//routes

//MEthod - get
router.post("/add-bills", addBillsController);

//MEthod - POST
router.get("/get-bills", getBillsController);
//method - delet
router.post("/delete-bills", deleteBillsController)



module.exports = router