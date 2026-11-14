let express=require("express");
let bodyParser=require("body-parser");

const ALLOWED_IPS=[
    "127.0.0.1",
    "123.456.7.89"
];

let api=express.Router();
//const urlencodedParser = bodyParser.urlencoded({ extended: false });
//api.use(express.json());


api.get("/users",(request,response)=>
{
    response.send("PLEASEEEEEEEEEEEEE");
})

api.get("/users/:userid",(request,response)=>
{
    let userId=parseInt(request.params.userid,10);
    response.send("hello pbeease "+userId);
})

api.post("/order", async(request,response)=>
{
    console.log("cart:",request);
})

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
})

module.exports=api;