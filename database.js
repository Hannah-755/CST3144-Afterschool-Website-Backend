let {MongoClient, ObjectId}=require('mongodb');

let dotenv=require('dotenv');
dotenv.config();

class DataBase
{
    constructor()
    {
        const uri=process.env.dbURI;
        this.client=new MongoClient(uri);
        this.db;
    }

    async connect()
    {
        try
        {
            await this.client.connect();
            console.log("Connected to MongoDB");
            this.db=this.client.db("cst3144");
        }
        catch (error)
        {
            console.log("MongoDB connection failed:",error);
        }
    }

    async close()
    {
        this.client.close();
    }
}

module.exports=DataBase;