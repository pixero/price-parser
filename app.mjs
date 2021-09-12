import express from 'express'
import {getGoodsPrice} from "parser.mjs";

const app = express();

const port = 3000;

app.get('/api/goods/price',async (req,res)=>{
    const url = req.query.url;
    const price = await getGoodsPrice(url);
    console.log(price)
    res.send(price);
});

app.listen(port);
