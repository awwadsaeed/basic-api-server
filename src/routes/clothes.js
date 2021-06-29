'use strict';
const express = require('express');
const Clothe = require('../models/clothes');
const router = express.Router();
const clothes = new Clothe();
const validator = require('../middlewares/validator');

router.post('/',validator,createHandler);
router.get('/',readHandler);
router.get('/:id',readHandler);
router.put('/:id',validator,updateHandler);
router.delete('/:id',deleteHandler);



function createHandler(req,res){
    const resObj = clothes.create(req.body);
    res.json(resObj);
}
function readHandler(req,res){
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}
function updateHandler(req,res){
    const resObj = clothes.update(req.params.id,req.body);
    res.json(resObj);
}
function deleteHandler(req,res){
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
}
module.exports = router;