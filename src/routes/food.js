'use strict';
const express = require('express');
const Food = require('../models/food');
const router = express.Router();
const food = new Food();
const validator = require('../middlewares/validator');

router.post('/',validator,createFoodHandler);
router.get('/',readFoodHandler);
router.get('/:id',readFoodHandler);
router.put('/:id',validator,updtaeFoodHandler);
router.delete('/:id',deleteFoodHandler);



function createFoodHandler(req,res){
    const resObj = food.create(req.body);
    res.json(resObj);
}
function readFoodHandler(req,res){
    const resObj = food.read(req.params.id);
    res.json(resObj);
}
function updtaeFoodHandler(req,res){
    const resObj = food.update(req.params.id,req.body);
    res.json(resObj);
}
function deleteFoodHandler(req,res){
    const resObj = food.delete(req.params.id);
    res.json(resObj);
}
module.exports = router;