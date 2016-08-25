'use strict';
var expect = require('chai').expect;
var Country = require('../models/country.js');

describe('Country Class', function () {

	beforeEach(function (done) {
		done();
	});

	after(function (done) {
		done();
	});

	afterEach(function (done) {
		done();
	});

	describe('construct', function () {

		var pink = '#e56262';
		var red = '#dd0606';
		var lightGreen = '#6ec977';
		var green = '#00c110';
		var grey = '#c1c1c1';

		it('should contruct a country object', function (done) {
			var country = new Country('test country', 'ts', true, false);
			expect(country.name).to.eql('test country');
			expect(country.code).to.eql('ts');
			expect(country.homosexuality).to.eql(true);
			expect(country.transgender).to.eql(false);
			done();
		});

		it('should contruct a country object with green color', function (done) {
			var country = new Country('test country', 'ts', true, true);
			expect(country.mapColor).to.eql(green);
			done();

		});

		it('should contruct a country object with light green color', function (done) {
			var country = new Country('test country', 'ts', true, null);
			expect(country.mapColor).to.eql(lightGreen);
			done();

		});

		it('should contruct a country object with red color', function (done) {
			var country = new Country('test country', 'ts', true, false);
			expect(country.mapColor).to.eql(red);
			done();
		});

		it('should contruct a country object with red color', function (done) {
			var country = new Country('test country', 'ts', false, false);
			expect(country.mapColor).to.eql(red);
			done();

		});

		it('should contruct a country object with red color', function (done) {
			var country = new Country('test country', 'ts', null, false);
			expect(country.mapColor).to.eql(red);
			done();

		});

		it('should contruct a country object with grey color', function (done) {
			var country = new Country('test country', 'ts', null, null);
			expect(country.mapColor).to.eql(grey);
			done();

		});

		it('should contruct a country object with pink color', function (done) {
			var country = new Country('test country', 'ts', false, null);
			expect(country.mapColor).to.eql(pink);
			done();

		});

	});

});