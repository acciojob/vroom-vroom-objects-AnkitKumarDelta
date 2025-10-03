function Car(make, model) {
    this._make = make;
    this._model = model;
}

// Getters for make and model
Object.defineProperty(Car.prototype, 'make', {
    get: function() {
        return this._make;
    }
});

Object.defineProperty(Car.prototype, 'model', {
    get: function() {
        return this._model;
    }
});

Car.prototype.getMakeModel = function() {
    return `${this._make} ${this._model}`;
}

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this._topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Getter for topSpeed
Object.defineProperty(SportsCar.prototype, 'topSpeed', {
    get: function() {
        return this._topSpeed;
    }
});

// Method for topSpeed
SportsCar.prototype.getTopSpeed = function() {
    return this._topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
