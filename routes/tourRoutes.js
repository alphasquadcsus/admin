var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tour = require('../models/Tour.js');
var Site = require('../models/Site.js');

router.get('/viewTours',function(req,res){ //Render main page to view all tours
	var tour = Tour.find(function(err,tours){
		if(err) res.send(err);
		res.render('viewTours',{allTours: tours});
	});
});
router.get('/addTour',function(req,res){
	var site = Site.find(function(err,sites){
		if(err) res.send(err);
		res.render('/addTour',{allSites: sites});
	});
});
router.post('/addTour',function(req,res){
	res.redirect('/viewTours');
});



module.exports = router;