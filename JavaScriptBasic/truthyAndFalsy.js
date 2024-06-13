// 자바스크립트 문법이 아니지만 알아야 할 개념
function print(person) {
    // if (person === undefined || person === null) {
    if (!person) {  // undefined 또는 null 인 경우 false 취급
        console.log('person이 없습니다');
        return;
    } 
    console.log(person.name);
}

const person = null;

print(person);  // 괄호가 비어있을 시 넘어간 값이 없어서 에러 발생

// falsy 값
console.log(!undefined);
console.log(!null);
console.log(!0);    
console.log(!'');   // 공백 있을 시 거짓
console.log(!NaN);  // Not a Number 문자열을 숫자로 변환할 때 parseInt()

// truthy 값
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{value: 1});

const value = {a : 1};
const truthy = value ? true : false;
console.log('truthy? : ' + truthy);
console.log('!truthy? : ' + !truthy);
console.log(value);