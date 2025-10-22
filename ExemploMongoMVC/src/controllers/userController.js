const User = require("../models/userModel");

exports.getUsers = async function (req, res) {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.create = function (req, res) {
  //falta colocar o try catch para ficar melhor
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });
  user
    .save()
    .then(res.status(201).send(user.toJSON()))
    .catch((error) => {
      res
        .status(500)
        .send({ message: `${error.message} - falha ao cadastrar usuario.` });
    });
};

exports.details = async function (req, res) {
  try {
    const result = await User.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

 exports.delete = async function (req, res) {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Usuário excluído com sucesso!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.update = async function (req, res) {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      age: req.body.age,
    });
    res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
