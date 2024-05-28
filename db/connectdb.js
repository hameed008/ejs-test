import mongoose from "mongoose";

//# ///////////////////////////////////////////////////
//* Making Connection with Database Using Async and Await:
//? mongoose.connect() method returns a Promise

const connectDB = async (DATABASE_URL) => {
  try {
    //* without Options Object:
    // await mongoose.connect(DATABASE_URL);

    // const DB_OPTIONS = {
    //   dbName: "school",
    // };

    //* without Options Object
    await mongoose.connect(DATABASE_URL);

    console.log(`Database Connected Successfully With ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
