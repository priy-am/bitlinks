import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL;

let client;
let clientPromise;

if (!process.env.MONGODB_URL) {
  throw new Error('Please define the MONGODB_URL environment variable inside .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(url); // no options
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(url); // no options
  clientPromise = client.connect();
}

export default clientPromise;
