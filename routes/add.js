var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var desc = req.query.description;
	var imageURL = "http://lorempixel.com/400/400/people";
	var newFriend = {
		"name": name,
		"description": desc,
		"imageURL": imageURL
	};
	// console.log(newFriend);
	data['friends'].unshift(newFriend);
	res.render('add', data);
 }