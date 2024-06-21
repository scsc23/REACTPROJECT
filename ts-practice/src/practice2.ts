// 함수 타입 정의
function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(10, 20));

function sumArray(numbers:number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = [10, 20, 30, 40, 50];
console.log(total);

function nonReturnFunction(): void {    // 반환값 없는 함수 타입 지정 void
    console.log('반환값 없는 함수')
}

// Interface 사용
// Interface는 클래스 또는 객체를 위한 타입 지정

// Shape interface 선언
interface Shape {
    getArea(): number;  // Shape interface에는 getArea 함수가 필수
}

class Circle implements Shape {
// implements 키워드를 통해 interface 구현을 명시   
    // radius: number; // 멤버 변수 선언

    constructor(public radius: number) {    // public으로 변수 부분 생략
        this.radius = radius;
    }

    // 너비를 가져오는 함수
    getArea(): number {
        return this.radius * this.radius * Math.PI
    }
}

// 사각형
class Rectangle implements Shape {
    // width: number;
    // height: number;

    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}
const shape: Shape[] = [new Circle(5), new Rectangle(10, 20)];
shape.forEach(shape => console.log(shape.getArea()));

const circle = new Circle(8);
const rectangle = new Rectangle(100, 200);

console.log(circle.radius); // radius는 public
// console.log(rectangle.width); // width는 private

// 클래스가 아닌 일반 객체를 interface로 타입 지정
interface Person {
    name: string;
    age?: number;   // ?는 설정 여부를 따지지 않는 값
};

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// };

interface Developer extends Person {
    skills : string[];
};

const person: Person = {
    name: '홍길동',
    age: 100,
};

const expert: Developer = {
    name: '빌게이츠',
    skills: ['C', 'C++', 'React']
};

const people: Person[] = [person, expert];

// Type Alias
// type은 특정 타입에 별칭을 붙이고(배열 포함 모든 타입 가능) 객체를 위한 타입을 설정

type Developer2 = Person & {    // &를 사용해서 두 개 이상의 타입을 합함
    skills: string[];
}

const expert2: Developer2 = {
    name: '이순신',
    skills: ['거북선', 'Go', 'MarkDown']
}

const people2: Person[] = [person, expert2];

type Color = 'red' | 'orange' | 'yellow';
const color2 : Color = 'red';

const colors: Color[] = ['red', 'yellow']