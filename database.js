let {MongoClient, ObjectId}=require('mongodb');

let dotenv=require('dotenv');
dotenv.config();

class DataBase
{
    constructor()
    {
        const uri=process.env.dbURI;
        this.client=new MongoClient(uri);
        this.db=this.client.db("webstore");
    }

    async connect()
    {
        try
        {
            await this.client.connect();
            console.log("Connected to MongoDB");
        }
        catch (error)
        {
            console.log("MongoDB connection failed:",error);
        }
    }

    async find(collectionSearch,id)
    {
        try
        {
            if (!ObjectId.isValid(id))
            {
                return ({msg: "Invalid ObjectId"});
            }

            let toSearch=this.db.collection(collectionSearch);
            const result=await toSearch.find({_id: new ObjectId(id)}).toArray();
            return (JSON.stringify({result:result}))
        }
        catch (error)
        {
            return error;
        }
    }

    async close()
    {
        this.client.close();
    }
}

module.exports=DataBase;