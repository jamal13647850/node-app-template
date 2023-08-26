//const {default:mongoose}=require("mongoose");
// import { default as mongoose } from "mongoose";
import { connect } from 'mongoose';
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_URL =`mongodb://${DB_USER}:${DB_PASS}@127.0.0.1:27017/${DB_NAME}`;
connect(DB_URL).then(()=>{
    console.log("Server Connected to mongodb");
})
.catch(((error)=>{
    console.log(error.message);
}));
