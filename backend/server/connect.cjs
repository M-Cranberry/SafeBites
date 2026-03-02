const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: 'configMONGO_URI=mongodb+srv://Megan:NEWsDutcTybzgRWv9TT@cluster0.zadfioy.mongodb.net/?appName=Cluster0.env' });

const connectionString = process.env.MONGO_URI;

if (!connectionString) {
  throw new Error("MongoDB connection string is not defined in .env");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionString, {
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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
