import express from 'express';
import {connect} from './config/database.js';

const app = express();



app.listen(6000,async()=>{
    console.log("server is running fine");
    connect();


})