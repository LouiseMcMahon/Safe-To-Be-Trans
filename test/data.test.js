'use strict';
var expect = require('chai').expect;
var Data = require('../models/data.js');

describe('Data Class', function() {

	beforeEach(function (done) {
		done();
	});

	after(function(done) {
		done();
	});

	afterEach(function(done) {
		done();
	});

	describe('getDataFile', function () {
		it('should return a array', function (done) {
			Data.getData(function (err,jsonArray) {
				expect(err).is.a('null');
				expect(jsonArray).to.be.instanceof(Array);
				done();
			});
		});
	});	

});