import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Database connected successfully (Atlas)'))
  .catch((err) => console.error('❌ Database connection failed:', err));
