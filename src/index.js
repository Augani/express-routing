const express = require('express');
var router = express.Router();

var theArrayOfFunctions = [];
exports.Setup = (array) =>{
  array.map(d=>{
    var middlewares = [];
    if(d.middleware){
      d.middleware.map(t=>{
        middlewares.push(t);
      })
      if(d.method == "get"){
        var d = router.get(d.route,...middlewares,d.controller);
        theArrayOfFunctions.push(d);
      }else{
        var d = router.post(d.route,...middlewares,d.controller);
        theArrayOfFunctions.push(d);
      }
    }else{
      if(d.method == "get"){
        var d = router.get(d.route,d.controller);
        theArrayOfFunctions.push(d);
      }else{
        var d = router.post(d.route,d.controller);
        theArrayOfFunctions.push(d);
      }
    }
   
   
  })
  
}

exports.getRouter = ()=>{
  return router;
}