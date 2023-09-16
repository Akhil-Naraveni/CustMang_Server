const router = require('express').Router();
const Contacts = require('../Model/ContactsModel')



router.get("/contacts/:id", async(req, res)=>{
    try{
        console.log(req.params.id)
        let searchFilter = req.query.searchType
        const search = `\^${req.params.id}`
        const query = {
            [searchFilter]: { $regex: search },
            userId: req.userId
          };
          
          const contacts = await Contacts.find(query);
        // const contacts = await Contacts.find({$and:[{searchFilter :{$regex:search}}, {userId:req.userId}]})
        console.log(searchFilter)
        res.status(200).json({
            status:"Success",
            contacts:contacts
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})



module.exports = router;