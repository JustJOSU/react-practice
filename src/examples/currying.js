const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, x);
const addX = x => a => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = x => addFour(multiplyThree(multiplyTwo(x)));

[multiplyTwo, multiplyThree, addFour].reduce(
    function (prevFunc, nextFunc) {
        return function (value) {
            return nextFunc(prevFunc(value));
        };
    },
    function (k) { return k; }
)

// function compose() {
//     const funcArr = Array.prototype.slice.call(arguments);
//     console.dir(funcArr);
//     return funcArr.reduce(
//         function (prevFunc, nextFunc) {
//             return function (value) {
//                 const args = Array.prototype.slice.call(arguments);
//                 return nextFunc(prevFunc.apply(null, atgs));
//             }
//         },
//         function (k) { return k; }
//     );
// }

function compose(...funcArr) {
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function (...args) {
                return nextFunc(prevFunc(...args));
            }
        },
        function (k) { return k; }
    );
}

function test() {
    const temp = Array.prototype.slice.call(arguments);
    console.dir(temp);
}

// 
// const formulaWithCompose = compose(multiplyTwo);
// const formulaWithCompose2 = compose(multiplyTwo, multiplyThree);
const formulaWithCompose3 = compose(multiplyTwo, multiplyThree, addFour); 

// console.log(formulaWithCompose(10));
// console.log(formulaWithCompose2(10));
// console.log(formulaWithCompose3(10));

// console.log(test(1,2,3));

const formulaWithCompose4 = compose(multiplyTwo, multiplyThree, addFour);
const x = 10;

console.log(formulaWithCompose4(10));