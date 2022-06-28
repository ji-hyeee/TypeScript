// #2.4 Types of TS part Three
// 새로운 타입을 알아보자
// 타입스크립트의 type checker와 소통한다

// 타입을 모르는 변수를 타입스트립트에게 알려주려면?
// unknown

let a: unknown;
// 변수의 타입을 확인하는 방식으로 보호받는다

// let b = a + 1
// Object is of type 'unknown'.

if (typeof a === 'number') { // 만약 a의 타입이 숫자라면 ~
    let b = a + 1
}

if (typeof a === 'string') {
    let b = a.toUpperCase();
}


// void
// 비어있는 것
// 아무것도 리턴하지 않는 함수를 대상으로 사용

function hello() { // hello(): void
    console.log('x')
}

const b = hello();
b.toUpperCase()
// Property 'toUpperCase' does not exist on type 'void'. / 오류


// never
// 함수가 절대 리턴하지 않을 때 사용
// 함수에서 exception(예외)가 발생했을 때

function hi(): never {
    return "X"
}
// Type 'string' is not assignable to type 'never'. / 오류

function hye(): never {
    throw new Error("XXX") // 오류 발생 시키기
}

// never 는 타입이 두가지일수도 있는 상황에 발생할 수 있다

function jihye(name: string | number) {
    if (typeof name === "string") {
        name // string
    } else if (typeof name === "number") {
        name // number
    } else {
        name // never / 절대 실행되지 않는다
    }
}