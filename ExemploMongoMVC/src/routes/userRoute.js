const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/user", userController.getUsers);
router.post("/user", userController.create);
router.get("/user/:id", userController.details);
router.delete("/user/:id", userController.delete);
router.put("/user/:id", userController.update);

module.exports = router;
