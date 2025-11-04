import mongoose from "mongoose";

const MONGO_DB = process.env.MONGODB_URI || " ";
console.log('[mongoose] MONGODB_URI =', JSON.stringify(MONGO_DB));
declare global{
    // allowing mongoose cache to exist in the global scope.
    var mongoCache:{
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

// returning the cache ->
let cached = global.mongoCache;
if(!cached){
    console.log("🧩 Raw URI characters:", JSON.stringify(MONGO_DB));
// do not want to recreate the server actions again and again by hot reloading.
    cached = global.mongoCache = {conn:null, promise:null}
}

export const connectDatabase = async () => {
    if(!MONGO_DB) throw new Error("MONGODB_URI must be set in the .env ");

    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO_DB, {bufferCommands: false});
    }
    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }
    console.log(`Connected to the Database,${process.env.NODE_ENV} - ${MONGO_DB}`)
}