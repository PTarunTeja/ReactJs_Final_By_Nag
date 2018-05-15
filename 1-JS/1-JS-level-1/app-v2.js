
//
class Trainer {
    constructor(name) {
        this.name = name;
    }
    doTeach(sub) {
        console.log(`${this.name} teaching ${sub}`);
        let notes = `${sub}-notes`
        let self = this;
        let doLearn = function () {
            console.log(`${this.name} learning with ${notes} from ${self.name}`);
        }
        return doLearn;
    }
}


class Employee {
    constructor(name) {
        this.name = name;
    }
}

function sessionStart() {
    let tnr = new Trainer('Nag');
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let learnFunc = tnr.doTeach();
    learnFunc.call(e1);
    learnFunc.call(e2);
}
sessionStart();