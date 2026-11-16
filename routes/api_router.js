let express=require("express");
let DataBase=require("../database.js");
let api=express.Router();
/*const ALLOWED_IPS=[
    "127.0.0.1",
    "123.456.7.89"
];
api.use((request,response,next)=>
{
    let validated=ALLOWED_IPS.indexOf(request.ip)!==-1;
    if (!validated)
    {
        response.status(401).send("Not Authorized");
    }
    else
    {
        next();
    }
})*/

let db=new DataBase();

api.get('/',(request,response)=>
{
    console.log("PLEASE");
    response.send("please i'm so tired:",request);
})

api.get("/collection/:collectionName/:id",async(request,response)=>
{
    let results=await db.find(request.params.collectionName, request.params.id);

    if (results.msg)
    {
        response.status(400).send(results.msg);
    }
    else
    {
        response.send(JSON.parse(results).result);
    }
})

api.post("/order",async(request,response)=>
{
    console.log("cart:",request.body);
})

module.exports=api;