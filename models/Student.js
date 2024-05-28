import mongoose from "mongoose";

//* Defining Schema:
//# ///////////////////////////////////////////////////
//* using ( import mongoose from "mongoose"; )
const studentSchema = new mongoose.Schema({
  // _id:Number, // we can override mongodb's default generated _id
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: {
    type: mongoose.Decimal128,
    requied: true,
    validate: (value) => {
      value >= 5500.5;
    },
  },
});

//# ///////////////////////////////////////////////////
//* Compiling Schema:
// it will create a 'Collection of name 'students' in the Database.
const studentModel = mongoose.model("student", studentSchema);

export default studentModel;
