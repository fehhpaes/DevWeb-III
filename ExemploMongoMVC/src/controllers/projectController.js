const projectModel = require("../models/projectModel");

exports.getProjects = async function (req, res) {
  try {
    const result = await projectModel.find().populate("assignedTo");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.create = function (req, res) {
  let project = new projectModel({
    title: req.body.title,
    description: req.body.description,
    assignedTo: req.body.assignedTo,
  });
  project
    .save()
    .then(res.status(201).send(project.toJSON()))
    .catch((error) => {
      res
        .status(500)
        .send({ message: `${error.message} - falha ao cadastrar projeto.` });
    });
};

exports.details = async function (req, res) {
  try {
    const result = await projectModel.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
