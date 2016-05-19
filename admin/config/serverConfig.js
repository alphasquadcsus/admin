module.exports = {
	//MongoDB Database URL goes after db : and before the comma
	//Example MongoLab url: 'mongodb://<Mongolab Username>:<Mongolab Password>@<Mongolab Port>.mongolab.com:<MongoLab Port>/<Mongolab Database Name>',
	db : ,
	//Change the 3000 in the '' to change the port
	port : process.env.PORT || '3000'  
};
