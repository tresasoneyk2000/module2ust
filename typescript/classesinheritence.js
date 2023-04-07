var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, name) {
        var _this = _super.call(this, name) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getNameModel = function () {
        return this.model + this.name;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name) {
        return _super.call(this, name) || this;
    }
    return Truck;
}(Vehicle));
var mycar = new Car("Sports Model..", "bmw");
console.log(mycar.getNameModel());
var truck = new Truck("Tata truck");
console.log(truck.getName());
