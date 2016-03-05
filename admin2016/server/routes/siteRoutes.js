var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tour = require('../models/tour.js');

router.get('/view',function(req, res){ //View all the sites
	Tour.find(function(err, sites){
		if(err) 
			res.send(err);
		res.json(sites);
	});
});

router.post('/add',function(req, res){ //Posts data from createSite.js
	var site = new Tour();
	site.idnum=req.body.idNum;
	site.tourtype=JSON.parse(req.body.type);
	site.title=req.body.title;
	site.lat=req.body.lat;
	site.lon=req.body.lon;
	site.description=req.body.description;
	site.technical=req.body.technical;
	site.pics=req.body.pics;
	
	site.save(function(err){
		if(err) 
			res.send(err);
	});
});
router.post('/delete',function(req, res){
	var sID = req.body.siteID; //Get _id of site
	Tour.findById(sID,function(err,site){
		if(err)
			res.send(err);
		site.remove(); //Delete the site
	});
});
/*
router.post('editSite',function(req,res){
		
	//NOT IMPLEMENTED
	
	
	var sID = req.body.siteID; //Get _id of site
	Site.findbyId(sID,function(err, aSite){
		res.render('editQuiz',{site: aSite});
	});
});
*/

module.exports = router;