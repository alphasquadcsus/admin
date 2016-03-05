/**
 * Created by Edgar on 2/8/16.
 *
 */
TourSite = function(siteType) {
	this.siteType = siteType;
	this.long = 0;
	this.lat = 0;
	this.description = "";
	this.img = "";
	this.quiz = 0;
};

TourSite.prototype.addSite = function (long, lat, descrip, img) {
	this.long = long;
	this.lat = lat;
	this.description = description;
	this.img = img;
};

TourSite.prototype.addQuiz = function(quiz) {
	this.quiz = quiz;
};

TourSite.prototype.addSiteType = function(site) {
	this.siteType.push(site);
};

TourSite.prototype.getSiteType = function() {
	return this.siteType;
}
TourSite.prototype.getSite = function() {
	var temp;
	temp = siteType + "," + long + "," + "," + lat + ",";
	temp += description + "," + img;
	return temp;
};

TourSite.prototype.getCoordinates() = function() {
	var temp;
	temp = long + "," + lat;
};

TourSite.prototype.getImage() = function() {
	return this.img;
};

TourSite.prototype.getDescription = function() {
	return this.getDescription
};