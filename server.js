const PORT=3000;

let express=require("express");
let bodyParser=require("body-parser");
let cors=require("cors");

let fs=require("fs");
let path=require("path");

const app=express();
app.use(express.json());
app.use(cors());

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use((request,response,next)=>
{
    console.log("Request IP:",request.url);
    console.log("Request date: "+new Date());
    next();
})

app.use((request,response,next)=>
{
    let filePath=path.join(__dirname,"static",request.url);
    fs.stat(filePath,(error,fileInfo)=>
    {
        if (error)
        {
            next();
            return
        }

        if (fileInfo.isFile())
        {
            response.sendFile(filePath);
        }
        else
        {
            next();
        }
    });
})

app.use((request,response)=>
{
    response.status(404).send("Page not found");
});

app.listen(PORT,()=>
{
    console.log("Listening on port 3000");
});