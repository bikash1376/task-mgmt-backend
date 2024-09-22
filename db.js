// db connection
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI || `mongodb+srv://bksh2674:jKX6a9do8HrFN6Gu@cluster0.qmxuyle.mongodb.net/task_mgmt?retryWrites=true&w=majority&appName=Cluster0`, {})
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

export default mongoose;
