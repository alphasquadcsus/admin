var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users.js');

router.get('/view', function(req, res){ 
	User.find(function(err, users){
		if(err)
			res.send(err);
		res.json(users); //Render json to view all users
	});
});

router.delete('/remove/:userID',function(req, res){ //Remove user by user's ID
	var uID= req.params.userID;
	User.remove({_id:uID},function(err,user){
		if(err)
			res.send(err)
		res.end();
	});
});

module.exports = router;