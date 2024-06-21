let count = 0;
count += 1;
// count = '불가능';
const message = 'Hello World';
console.log(message);
const done = true;
// const done2 = true;
// done2 = 'false'

const numbers: number[] = [1, 2, 3, 4];
const messages: string[] = ['hello', 'world'];

numbers.push(5);
// messages.push(3);

// undefined와 null 허용
let mightBeUndefined: string | undefined = 'hello';
let nullableNumber: number | null = null;
// let count2: number = null;

let color: 'red' | 'yellow' | 'orange' = 'red'
color = 'yellow';
// color = 'white';