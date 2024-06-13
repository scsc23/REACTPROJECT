// 변수와 상수
// 자바스크립트 변수 : var(옛날부터), let, const
// var >> let, const 권장(호이스팅 때문)
// let, const는 블럭 변수(해당 블럭 내에서만 생존)
{
    let a = 1;
    function A () {
        console.log(a);
    }
}
//
// let 선언
// 변수 선언, 바뀌수 있는 값을 지정할 때 사용
// 재선언이 가능
let value = 1;
console.log(value);
value = 2;
console.log(value);
// 같은 이름으로 재선언 불가
// let value2 = 1;
// let value2 = 2;

// const - 상수 선언
// const는 한번 선언하고 바뀌지 않는 값
// 재할당과 재선언이 안됨
// const a = 1;
// a = 2;
// console.log(a)

// 데이터 타입
// 1. 숫자(Number)
// 2. 문자열(String)
// '' or ""
let text = 'hello';
let name = "홍길동";
// 3. 참/거짓(Boolean)
let good = true;
let loading = false;
// 4. null과 undefined
// 데이터가 없음을 의미
// null >> 값이 존재하지 않음
// undefined >> 값이 설정되지 않음
let friend = null;  // 의도적으로 값을 null 로 설정
console.log(friend);
let testUndefined;  // 설정하지 않음
console.log(testUndefined);