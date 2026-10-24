const PORT=3000;

let express=require("express");
let cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(request,response)=>
{
    console.log("Status: Online");
    response.send({status:"Online"});
});

app.listen(PORT,()=>
{
    console.log("Listening on port 3000");
});