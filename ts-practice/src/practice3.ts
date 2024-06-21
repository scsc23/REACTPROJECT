// Generics(형 안정성)
// TypeScript에서 function, class, interface, type alias를 사용할 때 
// 여러 종류의 type에 대하여 호환을 맞춰야 하는 경우 

// 함수에서 Generics 사용

// 객체와 객체를 합쳐주는 함수
function merge(a:any, b:any): any { // any = 모든 타입
    return {
        ...a,
        ...b
    };    
}

const merged = merge({name: '홍길동'}, {age: 100});
console.log(merged);

// 위와 같은 경우 타입 검증이 불가하기에 Generics를 사용
function merge2<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}
const merged2 = merge2({name: '홍길동2'}, {age: 1000});
console.log(merged2);

function wrap<T>(param: T) {
    return {
        param
    };
}

const wraped = wrap(10);
const wraped2 = wrap('hello');
// const wraped3 = wrap<string>(1);

// interface에서 Generics 사용
interface Items<T> {
    list: T[];
}
const items: Items<string> = {
    list: ['a', 'b', 'c', 'd']
};
console.log(items);

// type Alias에서 Generics 사용
type TypeItems<T> = {
    list2: T[];
}
const TypeItems: TypeItems<number> = {
    list2: [10, 20, 30, 40, 50]
};
console.log(TypeItems.list2);

// class에서 Generics 사용
class Queue<T>   {
    list: T[] = [];
    // 배열 길이 반환
    getLength() {
        return this.list.length;
    }
    
    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());