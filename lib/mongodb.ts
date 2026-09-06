import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {
  throw new Error(
    "Missing MONGODB_URI environment variable"
  );
}


const URI: string = MONGODB_URI;



interface MongooseCache {

  conn: typeof mongoose | null;

  promise: Promise<typeof mongoose> | null;

}



declare global {

  var mongooseCache:
    MongooseCache | undefined;

}



const cached =
  global.mongooseCache ??
  (global.mongooseCache = {

    conn: null,

    promise: null,

  });






export default async function connectDB() {


  if (cached.conn) {

    return cached.conn;

  }




  if (!cached.promise) {


    cached.promise = mongoose
      .connect(URI, {

        bufferCommands: false,

        maxPoolSize: 10,

        serverSelectionTimeoutMS: 5000,

      })
      .then((mongooseInstance) => {

        return mongooseInstance;

      })
      .catch((error) => {

        cached.promise = null;

        throw error;

      });


  }




  cached.conn = await cached.promise;


  return cached.conn;


}