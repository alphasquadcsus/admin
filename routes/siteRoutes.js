var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Site = require('../models/Site.js');

router.get('/viewSites',function(req, res){ //View all the sites
	var site = Site.find(function(err, sites){
		if(err) res.send(err);
		res.render('viewSites',{allSites: sites});
	});
});
router.get('/addSite',function(req, res){ //Links to createSite.html
	res.render('addSite');
});
router.post('/addSite',function(req, res){ //Posts data from createSite.js
	var site = new Site();
	site.name=req.body.name;
	site.latitude=req.body.latitude;
	site.longitude=req.body.longitude;
	site.type=JSON.parse(req.body.type);
	site.save(function(err){
		if(err) res.send(err);
		res.send({redirect:'/viewSites'});
	});
});
router.post('/deleteSite',function(req, res){
	var sID = req.body.siteID; //Get _id of site
	Site.findById(sID,function(err,site){
		if(err) return handleError(err);
		site.remove(); //Delete the site
	});
	res.redirect('/viewSites'); //redirect back to viewQuizzes
});
router.post('editSite',function(req,res){
	
	
	//NOT IMPLEMENTED
	
	
	var sID = req.body.siteID; //Get _id of site
	Site.findbyId(sID,function(err, aSite){
		res.render('editQuiz',{site: aSite});
	});
});
module.exports = router;