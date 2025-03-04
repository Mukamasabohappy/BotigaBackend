import { createContact,getAllContact,getContactById,deleteById,update } from "../controllers/contactController.js";
 import express from'express';
const contactRouter=express();
contactRouter.post("/createContact",createContact);
contactRouter.get("/getAllContact",getAllContact);
contactRouter.get("/getContactById/:id", getContactById);
contactRouter.delete("/deleteById/:id",deleteById);
contactRouter.put("/updateById/:id",update);
export default contactRouter;