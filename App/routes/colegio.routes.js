module.exports = app =>{
  const Colegio = require ("../Controller/colegio.controller.js");
  var router = require("express").Router();
  router.post("/create/", Colegio.create);
  router.get("/", Colegio.findAll);
  router.get("/:id", Colegio.findOne);
  router.delete("/delete/:id", Colegio.delete);
  router.delete("/delete/", Colegio.deleteAll);
  router.put("/update/:id", Colegio.update);
  app.use("/api/colegio", router);
};