const {Router} = require("express");

const activitiesRouter = Router();

activitiesRouter.get("/", (req, res)=>{
    res.status(200).send("Actividades creadas")
});

activitiesRouter.post("/", (req, res)=>{
    res.status(200).send("Creando una actividad ")
});

module.exports = activitiesRouter;