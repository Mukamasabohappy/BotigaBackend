import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mainRouter from './routes/indexRouting.js';
import bodyParser from 'body-parser';
dotenv.config();
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;
const PORT = process.env.PORT||3000;

const app=express();
app.use(bodyParser.json());
app.use("/", mainRouter);
// app.use(express.json());

 
mongoose.set("strictQuery",false);
mongoose
.connect(process.env.dburi)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => { 
        console.log(`Node API is running on port http://localhost:${PORT}`);
        });
  })
  .catch((error) => {
    console.log(error);
});
