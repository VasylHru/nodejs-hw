import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl);
  } catch (error) {
    console.error(`Error conecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
