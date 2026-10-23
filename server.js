let express=require("express");

const app=express();
app.use(express.json());

app.get('/',(request,response)=>
{
    console.log("Status: Online");
    response.send({status:"Online"});
});

app.listen(3000,()=>
{
    console.log("Listening on port 3000");
});