//// #2.0 How Typescript Works 
// 타입스크립트가 뭔가요?
// 프로그래밍 언어
// strongly typed(강타입) 프로그래밍 언어
// 컴파일러를 떠올릴 수 있다
// 코드를 다 작성하면 기계가 실행할 수 있는 다른 종류의 코드로 변환되는 것
// 타입스크립트 >>> 자바스크립트로 변환된다
// 브라우저는 자바스크립트를 이해하기 때문
// node는 둘 다 이해함

// 어떻게 우릴 보호해준다는 거야
// 타입스크립트가 제공하는 보호장치는 자바스크립트로 변환되기 전에 발생된다
// 타입스크립트가 먼저 코드를 확인하고 실수가 나지 않게 확인한다
// 코드 에러가 있으면 변환(컴파일) 되지 않는다는 뜻 

const hye = { name: "hye" }
hye.hello()
// 시뻘건 밑줄로 에러감지
// Property 'hello' does not exist on type '{ name: string; }'

[1, 2, 3, 4] + false
// Operator '+' cannot be applied to types 'number[]' and 'boolean'.
// 자바스크립트에서는 냅다 실행했지만 타입스크립트에서는 컴파일조차 안된다

function divide(a, b) {
    return a / b
}
// // Parameter 'a' implicitly has an 'any' type.

divide(2, 3)
divide("메롱")
// Expected 2 arguments, but got 1.
// 인자 2개가 필요해요 근데 1개에요

// 입력값의 데이터 타입, 입력값의 갯수

const player = {
    age: 12
}

player.age = false
// Type 'boolean' is not assignable to type 'number'.