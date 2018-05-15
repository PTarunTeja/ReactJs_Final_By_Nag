

// ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// var p1 = new Person('Nag', 33)
// var p2 = new Person('Ria', 3)



// ES6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

var p1 = new Person('Nag', 33);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor');
    }
    saySalary() {
        console.log('i get ' + this.salary + " only");
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

let e1 = new Employee('Nag', 33, 1000.00);

class Boss extends Employee {

    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }

}

let boss = new Boss('Nag', 33, 1000.00);


class Abc {
    static staMethod() {
        //...
    }
}
Abc.staVar = 123;