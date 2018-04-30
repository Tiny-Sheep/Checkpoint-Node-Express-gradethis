'use strict';

const express = require('express');
const router = express.Router();
const todos = require("../models/todos")
const {listPeople,add,list,complete,remove,reset,tasks,isEmptyObj}=todos;



//router.use("/",bodyParser.json);

router.get("/users", (req,res,next)=> {
  
    res.json(listPeople())
});

router.get("/users/:name/tasks", (req,res,next)=>{
    try{ 
        if (!listPeople().includes(req.params.name)){throw 404}
        
        // check the req.queries object if empty 
        // if(Object.key(req.queries).length < 1){res.json(list(req.params.name))}
        // if empty do this:
        res.json(list(req.params.name))
        //else do this filter 
        // i dont know if this is the correct syntax but im filtering for completed tasks and assigning to the empty
        // req.body object
        // req.body = {...list(req.params.name).filter(object=> object[req.query.status] === true])}
        
        //1. check if 
        
        
     
    }catch(e){res.status(e).send()}
});

router.put("/users/:name/tasks/:index",(req,res,next)=>{

    complete(req.params.name,req.params.index)
    res.json(200);

});


router.delete("/users/:name/tasks/:index",(req,res,next)=>{

    remove(req.params.name,req.params.index)
    res.status(204).json();

});

router.post("/users/:name/tasks", (req,res,next)=>{
if (req.body.content.length >0){
    add(req.params.name,req.body)
    res.status(201).json(req.body)
}else{res.status(400).json()}
});







module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
