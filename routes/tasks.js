const express = require('express');
const router = express.Router();


router.get('/',
	(req,res) => {
		res.status(200).json({success:true, msg:'Show all tasks'});		
	});
router.get('/:id',
	(req,res) => {
		res.status(200).json({success:true, msg:`Show task ${req.params.id}`});		
	});
router.post('',
	(req,res) => {
		res.status(200).json({success:true, msg:`Create new task`});		
	});
router.put('/:id',
	(req,res) => {
		res.status(200).json({success:true, msg:`Update task ${req.params.id}`});		
	});
router.delete('/:id',
	(req,res) => {
		res.status(200).json({success:true, msg:`Delete task ${req.params.id}`});		
	})

