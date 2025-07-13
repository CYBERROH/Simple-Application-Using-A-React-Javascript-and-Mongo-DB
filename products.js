import {Router} from "express";//router is predefined class
import product from "./db.js";//product is model from db.js

const router = Router();//creating object of router from this router get is used
router.get('/',async(req,res) => {
    try {
        const products = await product.find();
        res.json(products); 
    }
    catch(error) {
        res.status(500).send(error.message);
    }
   
});
router.post('/',async(req,res) => {
    try {
        const newProduct = new product(req.body);//similar to constructor adds product to the products
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
//update product
router.put('/:id',async(req,res) => {
    try {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id,req.body,{new:true,});
        res.json(updatedProduct);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
})
//delete product
router.delete('/:id',async(req,res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(204).send(); 
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})
export default router ;