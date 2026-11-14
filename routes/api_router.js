let express=require("express");
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


api.get('/',(request,response)=>
{
    console.log("PLEASE");
    response.send("please i'm so tired:",request);
})

api.get("/users/:userid",(request,response)=>
{
    let userId=parseInt(request.params.userid,10);
    response.send("hello pbeease "+userId);
})

api.post("/order",async(request,response)=>
{
    console.log("cart:",request.body);
})

module.exports=api;