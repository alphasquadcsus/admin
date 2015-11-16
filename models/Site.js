var mongoose = require('mongoose');

var schema = mongoose.Schema;

var siteSchema = new schema({
	name: String,
	latitude: Number,
	longitude: Number,
	type: [String],
	tour: String,
	description: String,
	location: String,
	image: String
},
{
	collection : 'sites'
});

module.exports = mongoose.model('Site',siteSchema);