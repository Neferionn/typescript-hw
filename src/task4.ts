// EX 4 (optional) ------------------------------
// Write a class decorator, method decorator and parameter decorator
// functions
//for any Class the logic inside each decorator is up to you e.g.:
/*
@ClassDecorator
class SomeClass {
  @MethodDecorator
  someMethod(@ParameterDecorator someParameter: any) {
    console.log('this is our message');
  }
}
 */

function LogClass(logString: string) {
  console.log("Class Decorator");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function LogProperty(target: any, propertyName: string) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

function LogDescriptor(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogParameter(target: any, name: string, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}
@LogClass("Class created!")
class Product {
  @LogProperty
  title: string;

  private price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  @LogDescriptor
  getPriceWithTax(@LogParameter tax: number) {
    return this.price * (1 + tax);
  }
}

// const prod = new Product("apple", 10);
// console.log(prod.getPriceWithTax(2));
