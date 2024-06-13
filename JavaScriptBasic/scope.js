// 자바스크립트 Scope

// 1. Global(전역) : 코드의 모든 범위에서 사용 가능
// 2. Function(함수) : 함수 내에서만 사용 가능
// 3. Block(블럭) :특정 블럭 내에서만 사용 가능

const value = 'hello';

function myFunction() {
    console.log('myFunction');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction');
    const value = 'bye';
    console.log(value);
}

function myFunction2() {
    const value = 'bye2';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside:');
        console.log(value);
        console.log(anotherValue);
    }
    functionInside();
}

function myFunction3() {
    const value = 'bye3';
    if (true) {
        const value = 'world';
        console.log('block scope : ');
        console.log(value);
    }
    console.log('function scope : ');
    console.log(value);
}

myFunction()
otherFunction()
console.log('------------------------myFunction1------------------------')
myFunction2()
console.log('------------------------myFunction2------------------------')
myFunction3
console.log('global scope :');
console.log(value);
// console.log(anotherValue);

 