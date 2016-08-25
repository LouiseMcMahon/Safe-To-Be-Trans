'use strict';
class Data {

	/**
	 * Callback passes any error and the json array
	 * @param callback
	 */
	static getData(callback){
		var fs = require('fs');
		var obj;
		fs.readFile('data/data.json', 'utf8', function (err, data) {
			if (err) {
				return callback(err,null);
			}
			obj = JSON.parse(data);
			return callback(null,obj);
		});
	}
}

module.exports = Data;