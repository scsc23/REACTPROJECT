// Promise는 자바스크립트에서 비동기 실행흘 동기화 하는 구분으로 사용
// 실행 단계(상태 정보) : 이행(성공-FUlfill), 불이행(실패-reject), 대기(pendding)

const DB = [];

function saveDB(user) {
    const oldDBSize = DB.length;

    DB.push(user)
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {
        if (DB.loength > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error('Save DB Error'))
        }
    })
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {   // 실패 처리가 없음
        resolve(user);    
    })
}

function getResult(user) {
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    })
}

function registerByPromise(user) {
    // 비동기 호출이지만 순서를 지켜 실행
    const result = saveDB(user).then(sendEmail).then(getResult).catch(error => console.log(result));
    console.log(result);
    return result;
}

const myUser = {email: 'test@test.com', password: 'test1234', name: 'testuser'};
const result = registerByPromise(myUser);
result.then(console.log);