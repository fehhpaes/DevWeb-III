const express = require('express');
const router = express.Router();

const loginController = require('../controller/LoginController')

router.get("/login", loginController.getLogin);

//rota para a view
router.get("/logged", loginController.getIsLogged)

// router.get("/login", (req, res) => {
//     res.send('<h1>Login Funcionando!</h1>');
// });

module.exports = router;