'use strict';
class Country {

	/**
	 *
	 * @param countryName
	 * @param countryCode
	 * @param homosexuality
	 * @param transgender
	 * @returns {*}
	 */
	constructor(countryName,countryCode,homosexuality,transgender){

		//colors
		var pink = '#e56262';
		var red = '#dd0606';
		var lightGreen = '#6ec977';
		var green = '#00c110';
		var grey = '#c1c1c1';

		this.name = countryName;
		this.code = countryCode;
		this.homosexuality = homosexuality;
		this.transgender = transgender;
		this.mapColor = grey;

		if (homosexuality === true){
			if (transgender === true){
				this.mapColor = green;
			}else if (transgender === false){
				this.mapColor = red;
			}else{
				this.mapColor = lightGreen;
			}
		}else if (homosexuality === false){
			if (transgender === true){
				this.mapColor = lightGreen;
			}else if (transgender === false){
				this.mapColor = red;
			}else{
				this.mapColor = pink;
			}
		}else{
			if (transgender === true){
				this.mapColor = lightGreen;
			}else if (transgender === false){
				this.mapColor = red;
			}else{
				this.mapColor = grey;
			}
		}

		return this;
	}
}

module.exports = Country;