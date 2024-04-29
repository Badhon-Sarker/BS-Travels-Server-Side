const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000


// middleware

app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qx0skjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
 
    const detailsCollection = client.db("allPlaces").collection('placeDetails')

    const countryCollection = client.db("allPlaces").collection('country_Name')

    app.post('/addTouristsSpot', async(req, res)=>{
        const details = req.body
        const result = await detailsCollection.insertOne(details)
        res.send(result)
    })


    app.get('/allTouristsSpot', async(req, res)=>{
        const cursor = detailsCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/', async(req, res)=>{
        const cursor = detailsCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/myList/:email', async(req, res)=>{
        const email = req.params.email
        const cursor = detailsCollection.find({email: email})
        const result = await cursor.toArray()
        res.send(result)

    })


    app.get('/country', async(req, res)=>{
        const cursor = countryCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })




    app.get('/updateSingle/:id', async(req, res)=>{
        const id = new ObjectId(req.params.id)
        const result = await detailsCollection.findOne(id)
        res.send(result)
        
    })



    app.get('/detailsData/:id', async(req, res)=>{
        const id = new ObjectId(req.params.id)
        const result = await detailsCollection.findOne(id)
        res.send(result)
        
        
    })

    app.put('/updatePage/:id', async(req, res)=>{

        const query = {_id: new ObjectId(req.params.id)}

        const data = {
            $set: {
                image : req.body.image,
                tourists_spot_name : req.body.tourists_spot_name,
                country_Name :req.body.country_Name,
                location: req.body.location,
                description :req.body.description,
                average_cost : req.body.average_cost,
                seasonality: req.body.seasonality,
                travel_time : req.body.travel_time,
                totaVisitorsPerYear : req.body.totaVisitorsPerYear

            },
          };

        const result = await detailsCollection.updateOne(query, data);
        console.log(result)
        res.send(result)
    })


    app.delete('/delete/:id', async(req, res)=>{

        const result = await detailsCollection.deleteOne({_id: new ObjectId(req.params.id)})
        res.send(result)
    })

   



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





// app.get('/', (req, res)=>{
//     res.send("Travel agency server is running")
// })

app.listen(port, (req, res)=>{
    console.log("Server is running on port: ", port)
})