import mongoose from "mongoose";
const connections=()=>{
mongoose.connect("mongodb://0.0.0.0:27017/blog" ,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Database created!');
  });
  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to the database:', err);
  });

};
export default connections;