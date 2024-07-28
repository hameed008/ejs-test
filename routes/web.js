import express from "express";
const router = express.Router();
import StudentController from "../controllers/studentController.js";

router.get("/", StudentController.homePage);
router.get("/student", StudentController.getAllDoc);
router.post("/student", StudentController.createDoc);
router.get("/student/edit/:id", StudentController.editDoc);
router.post("/student/update/:id", StudentController.updateDocById);
router.post("/student/delete/:id", StudentController.deleteDocById);

export default router;
