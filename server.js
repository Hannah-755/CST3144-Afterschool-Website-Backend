const PORT=3000;

let express=require("express");
let bodyParser=require("body-parser");
let cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

app.post('/order',bodyParser.urlencoded({ extended: false }),(request,response)=>
{
    const order=request.body;
    console.log("Last Order:",order);
});

app.listen(PORT,()=>
{
    console.log("Listening on port 3000");
});