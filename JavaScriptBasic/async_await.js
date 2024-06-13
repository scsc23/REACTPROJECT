// async와 await ES8에 해당하는 문법으로 Promise를 더 쉽게 사용할수 있게 해줌

// 기본 사용법
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));        
}

async function process() {
    console.log('안녕하세요')
    await sleep(1000);
    console.log('반갑습니다')
}

async function makeError() {
    await sleep(1000);
    const error = new Error('강제 에러');   // Error
    throw error;    // 강제 예외 처리
}

async function process1() {
    // try {
    //     await makeError();
    // } catch (e) {
    //     console.log(e);
    // }
    await makeError()
    .then(() => console.log('에러 없음'))   // 성공 시
    .catch(e => console.log(e));           // 실패 시
}

process().then (() => {
    console.log('작업이 끝났습니다')
});
process1();        
// async는 함수의 앞부분에 사용하는 키워드
// await는 Promise 앞부분에 사용하는 키워드, promise가 끝날 때 까지 기다렸다 다음 작업을 수행

// 다수의 비동기 함수 처리
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(1000);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(1000);
    return '거북이';
}

async function process2() {
    const start = Date.now();
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
    const end = Date.now();
    console.log (end - start);
}
// process2();

async function process3() {
    const start = Date.now();
    // Promise.all 을 이용한 동시 처리
    // 단 하나라도 실패할 경우 전체 실패한것으로간주
    // const result = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
    const end = Date.now();
    console.log(end - start);
}
// process3();
// Promise.race : 여러 개의 프로미스를 등록하고 실행 시 가장 빨리 끝난 하나만 결과값으로 가져옴

async function process4() {
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(first);
}
process4();