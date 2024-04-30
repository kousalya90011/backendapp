const viewcontroller  = require("./controllers/menucontroller")


const express=require("express")
const viewmenu =express.Router()

router.post("/insertmenu", viewcontroller.insertmenu)

module.exports= viewmenu