// Complete the js code
function Car(make, model) {
	this._make = make;
	this._model = model;
}
Car.prototype.getMakeModel = function(){
	return `${this._make} ${this._model}`;
}

function SportsCar(make, model, topSpeed) {
	this._make = make;
	this._model = model;
	this._topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype.getTopSpeed = function(){
	return this._topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
