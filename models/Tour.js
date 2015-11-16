var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TourSchema = new Schema({
    tourtype: String,
	title: String,
    rating: Number,
    icon: String,
    link: String,
    description: [{
        main: String,
        picture: String
    }],
	siteIDs: [Number]
},
{
	collection: 'tours'
});



module.exports = mongoose.model('Tour', TourSchema);