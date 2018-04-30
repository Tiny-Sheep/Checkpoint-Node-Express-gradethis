'use strict';

let tasks = {}; // a place to store tasks by person


// some random text
module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
  return [...Object.keys(tasks)];
  },
  add: function (name, task) {
     
    if (name in tasks){
   
      if(!task.complete){
        task.complete=false
      }
      tasks[name].push(task)      
    }else{
      if(!task.complete){
          task.complete=false
        }
      tasks[name]=[task]
    }



  },
  list:function(name){
    return [...tasks[name]]
  },
  complete:function(name, index){

    tasks[name][index].complete = true



  },
  remove: function(name,index){

    tasks[name].splice(index,1)

  },
  isEmptyObj:function(queryObj){
    const boolVal= Object.keys(queryObj).length < 1
      return boolVal  
  }
  // etc.list
};
//