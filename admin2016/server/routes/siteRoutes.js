var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var multer = require('multer');
var uploading = multer({dest: 'img'});

var Tour = require('../models/tour.js');

router.get('/view',function(req, res){ //View all the sites
	Tour.find(function(err, sites){
		if(err) 
			res.send(err);
		res.json(sites);
	});
});

router.post('/add',function(req, res){ //Create site
	var	site = new Tour();
	site.title=req.body.title;
	site.tourtype=req.body.type;
	site.lat=req.body.lat;
	site.lon=req.body.lon;
	site.description=req.body.description;
	site.technicaldescription=req.body.technical;
	site.pics=req.body.pics;
	site.save(function(err){
		if(err) 
			res.send(err);
		});
});
/*
router.post('/add/img', uploading, function(req, res){
	
});
*/
router.put('/update',function(req, res){	
	Tour.update(
		{title:req.body.title},
		{$set: {
			tourtype:req.body.type,
			lat:req.body.lat,
			lon:req.body.lon,
			description:req.body.description,
			technicaldescription:req.body.technical,
			pics:req.body.pics
		}},
		{multi: false},
		function(err,site){
			if(err)
				res.send(err)
		});
});

router.delete('/remove/:siteTitle',function(req, res){
	var sTitle= req.params.siteTitle;
	Tour.remove({title:sTitle},function(err,site){
		if(err)
			res.send(err)
	});
});


module.exports = router;