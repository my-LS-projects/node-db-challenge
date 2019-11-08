const router = require("express").Router();
const Projects = require("./projects-model");

router.get("/", (req, res) => {
  Projects.getProjects().then(projects =>
    res
      .status(200)
      .json(projects)
      .catch(err => res.status(500).json(err))
  );
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(error => res.status(500).json(error));
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
    .then(task => res.status(200).json(task))
    .catch(error => res.status(500).json(error));
});

router.post("/", (req, res) => {
  Projects.addProjects(req.body)
    .then(project => res.status(201).json({ message: "project created" }))
    .catch(error => res.status(500).json(error));
});

router.post("/resources", (req, res) => {
  Projects.addResources(req.body)
    .then(resource => res.status(201).json({ message: "resource added" }))
    .catch(error => res.status(500).json(error));
});

router.post("/:id/tasks", (req, res) => {
  Projects.addTasks(req.body)
    .then(task => res.status(201).json({ message: "task created" }))
    .catch(error => res.status(500).json(error));
});

module.exports = router;
