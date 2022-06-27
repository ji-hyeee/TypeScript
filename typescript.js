//// #2.1 Implicit Types vs Explicit Types 
// 타입 시스템에 대해 알아보자
// 자바스크립트에서는 변수를 생성하기만 하고 타입을 지정하지 않았다
// Java, C# 은 타입을 명시해야한다

// 데이터와 변수의 타입을 명시적으로 정의할 수도 있고
// 자바스크립트처럼 변수만 생성하고 넘어가도 된다
// 타입을 추론해준다

let a = "hello"
// a의 타입을 추론 >>> 문자열

a = "bye"
// string > string

// a = 1
// 안된다 


// 타입을 자세하게 알려주기
// let b : boolean = "x"
// Type 'string' is not assignable to type 'boolean'.

// let b: boolean = false
let b = false
// : boolean <<< 타입스크립트 문법

// let c = [1,2,3]
// // number[]

// c.push("1")
// Argument of type 'string' is not assignable to parameter of type 'number'.

// 만약 빈 배열을 선언했다면 명시적 표현을 사용하자
let c = []
// let c: number[] = []
// 이럴 땐 명시적 표현이 유용하지만 명시적 표현은 최소화하는게 좋다
// 타입스크립트가 추론하게 시키도록 하자
