//* Creating student Controller Using Class:
import studentModel from "../models/Student.js";

class StudentController {
  // Display Welcome Page :
  static homePage = async (req, res) => {
    res.render("index");
  };


  // Create Document:
  static createDoc = async (req, res) => {
    console.log("Create Doc Post Method");

    // it will only work if we have added ( app.use(express.urlencoded({ extended: false })); ) in our app.js file.
    // console.log(req.body); // it will return an object of form table data.

    // clear
    // console.log(req.body.name); // here the 'name' is coming from the 'name atribute' of Name 'Input Field'.

    // console.log(req.body.age); // here the 'age' is coming from the 'name atribute' of Age 'Input Field'.

    // console.log(req.body.fees); // here the 'fees' is coming from the 'name atribute' of Fees 'Input Field'.

    try {
      //Destructuring Body Object:
      const { name, age, fees } = req.body;

      // Creating Document:
      const doc = new studentModel({ name: name, age: age, fees: fees });

      // Saving Document:
      const result = await doc.save();
      // console.log(result);

      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  // List All Document / Get All Document :
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      //console.log(result);
      res.render("dashboard", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Document:
  static editDoc = async (req, res) => {
    // console.log(req.params.id);

    try {
      const result = await studentModel.findById(req.params.id);
      // console.log(result);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  // Update Document;
  static updateDocById = async (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    try {
      const result = await studentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/student");
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Document:
  static deleteDocById = async (req, res) => {
    // console.log(req.params.id);

    try {
      const result = await studentModel.findByIdAndDelete(req.params.id);
      // console.log(result);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
