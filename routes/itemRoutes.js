const express = require('express');
const {
    getItemController,
    addItemController,
    editItemController,
    deleteItemController
  } = require("./../controllers/itemController");
const router =  express.Router()

//routes
// Method - get
router.get('/get-item', getItemController)

//MEthod - POST
router.post("/add-item", addItemController);

//method - Put
router.put("/edit-item", editItemController)

//method - delet
router.post("/delete-item", deleteItemController)

module.exports = router