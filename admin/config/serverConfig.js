module.exports = {
	//MongoDB Database URL goes after db : and before the comma
	//Example MongoLab url: 'mongodb://<Mongolab Username>:<Mongolab Password>@<Mongolab Port>.mongolab.com:<MongoLab Port>/<Mongolab Database Name>',
	//Here is the MongoLab account that was used for testing.
	db : 'mongodb://alphasquadcsus:alphasquad42@ds056688.mongolab.com:56688/alphasquaddb',
	//Change the 3000 in the '' to change the port
	port : process.env.PORT || '3000'  
};
