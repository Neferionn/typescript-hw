"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogClass(logString) {
    console.log("Class Decorator");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function LogProperty(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
function LogDescriptor(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function LogParameter(target, name, position) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = (function () {
    function Product(t, p) {
        this.title = t;
        this.price = p;
    }
    Product.prototype.getPriceWithTax = function (tax) {
        return this.price * (1 + tax);
    };
    __decorate([
        LogProperty
    ], Product.prototype, "title", void 0);
    __decorate([
        LogDescriptor,
        __param(0, LogParameter)
    ], Product.prototype, "getPriceWithTax", null);
    Product = __decorate([
        LogClass("Class created!")
    ], Product);
    return Product;
}());
//# sourceMappingURL=task4.js.map