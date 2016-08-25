var express = require('express');
var jade = require('jade');
var router = express.Router();
var Country = require('../models/country.js');
var Data = require('../models/data.js');

/* GET home page. */
router.get('/', function (req, res, next) {



	Data.getData(function (err,data) {
		var mapData = [];

		for (var i = 0, len = data.length; i < len; i++) {
			var country = new Country(data[i]['name'],data[i]['alpha-2'],data[i]['homosexuality'],data[i]['transgender']);

			var locals = {name: country.name,transgender: country.transgender,homosexuality: country.homosexuality},
				render = jade.compileFile('views/mapBubble.jade'),
				html   = render(locals);
			mapData.push({'id': country.code, 'color': country.mapColor, 'balloonText' : html});
		}

		res.render('index', {mapData: mapData});
	});


});

module.exports = router;
