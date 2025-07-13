import productRoute from "./products.js";
import cors from 'cors';
import express from "express";
const app = express();
app.use(express.json());
app.use(cors());
app.use('/',express.static('public'));
app.use('/products',productRoute);
app.listen(3000,function() {
    console.log("server is running");
});