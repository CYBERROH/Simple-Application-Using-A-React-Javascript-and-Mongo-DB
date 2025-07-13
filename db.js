import mongoose from 'mongoose';
const url = "mongodb://localhost/shopdb";
mongoose.connect(url);
const db = mongoose.connection;

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
});
const product = mongoose.model('product',productSchema); //interaction with mongodb
export default product;