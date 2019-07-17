// Sandbox
console.log("...Sandbox here...\n↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕\n↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕");
// Test

const MyObj3 = initVal => {
    let myVal = initVal
    return {
        get: function () {
            return myVal
        },
        set: function (val) {
            myVal = val
        }
    }
}
const x = MyObj3(0);
const y = MyObj3(4);
console.log(y.get())
console.log(x);
console.log(x.get())




