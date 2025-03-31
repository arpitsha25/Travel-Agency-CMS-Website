import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    console.log('Using existing database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('Creating new database connection...');
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => {
        console.log('Database connected successfully');
        return mongoose;
      })
      .catch((error) => {
        console.error('Database connection error:', error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null; // Reset cached promise on failure
    throw error;
  }

  return cached.conn;
}
