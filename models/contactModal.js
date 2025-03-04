import mongoose from "mongoose";
const {model,Schema}=mongoose;
const contactSchema=new Schema(
    {
      names:{
              type: String,
              required:true,
       },
       email:{
            type: String,
            required:true,
        },
        subject:{
              type: String,
               required:true,
        },
        message:{
               type: String,
                required:true,
        },
        phone:{
            type: String,
            required:true,
        },
    },
    {
timeStamps:true
    }
)
const Contact=model("Contact",contactSchema)
export default Contact;