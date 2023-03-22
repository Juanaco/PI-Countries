const {Router} = require("express");

const countriesRouter= Router();


countriesRouter.get("/", (req, res) =>{
    res.status(200).send("Paises");

})

countriesRouter.get("/:id", (req, res)=>{
    res.status(202).send("El pais seleccionado");
});





module.exports = countriesRouter;