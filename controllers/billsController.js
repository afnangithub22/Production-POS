const billsModel = require("../models/billsModel");



//add items
const  addBillsController = async (req, res) => {
    try {
      const newBill = new billsModel(req.body);
      await newBill.save();
      res.send("New Bill Create Successfully!");
    } catch (error) {
      res.send( error);
      console.log(error);
    }
  };

  //get Bills data
  const getBillsController = async (req, res) => {
    try {
      const bills = await billsModel.find();
      res.send(bills);
    } catch (error) {
      console.log(error);
    }
  };
   // Delet Item
const deleteBillsController = async(req, res) =>{
  
  try {
    const {billsId} = req.body;
    await billsModel.findOneAndDelete({_id:billsId})
    res.status(200).send("Item Deleted")
   } catch (error) {
     res.status(400).send(error)
     console.log(error)
   }
}





module.exports = { addBillsController,getBillsController, deleteBillsController};