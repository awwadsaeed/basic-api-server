'use strict';
module.exports=(req,res,next)=>{
    if(!req.body.name||!req.body.price){
        next('request body should have a name and a price');
    }else{
        next();
    }
}