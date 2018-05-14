

function sessionStart() {
    let tnr = {
        name: 'Nag',
        doTeach: function (sub) {
            console.log(`${this.name} teaching ${sub}`);
            let notes = `${sub}-notes`
            let self = this;
            let doLearn = function () {
                console.log(`${this.name} learning with ${notes} from ${self.name}`);
            }
            return doLearn;
        }
    };
    let e1 = { name: 'A' }
    let e2 = { name: 'B' }
    let learnFunc = tnr.doTeach('.js'); // method-invocation
    learnFunc.call(e1); // call/apply/bind invocation
    learnFunc.call(e2);
}
sessionStart(); // function-invocation