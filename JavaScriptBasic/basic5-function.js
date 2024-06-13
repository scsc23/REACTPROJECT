// 함수
// 함수란 특정 코드를 하나의 명령으로 실행할 수 있게 하는 기능

// 두 수를 더하는 함수
function add(a, b) {
    return a + b;
}

const num = add(10, 20);
    console.log(num);
    
function hello(name) {
    console.log('hello' + name + '!')
    console.log(`hello ${name}!`)
}
hello('덕우');

// ES6 Template Literal 문법
// 화살표 함수
// 함수를 선언하는 방법
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(10, 20));

// 바로 반환값이 나오는 경우
const add3 = (a, b) => a + b;
console.log(add2(10, 20));
console.log(add3(10, 20));
// 화살표 함수와 function 함수의 차이 : this가 가리키는 것이 다름
// function의 this는 자신의 종속된 객체 화살표 함수의 this는 상위 범위 this