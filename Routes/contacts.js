const router = require('express').Router();
const Contacts = require("../Model/ContactsModel")
const bodyparser = require("body-parser")
// Your routing code goes here


router.post('/contacts',async(req,res)=>{
    try{
        const contacts = await Contacts.create(req.body)
        console.log(req.body)
        res.status(201).json({
            status:"Success",
            contacts
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message: e.message
        })
    }
})