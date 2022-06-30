//// #3.2 Polymorphism
// 타입스크립트가 어떻게 다형성을 주는지 확인하자
// 다형성이란 무엇일까?

// Poly(그리스어) >>> many, several, much, multi
// Polygon(다각형)을 생각하자 
// 여러개의 면, 여러개의 각도를 가지고 있다

// morphos / morphic >>> form(형태), struture(구조)

// 다형성 >>> 여러가지 다른 구조들


// 함수는 여러가지 다른 모양, 형태를 가지고 있다
// 타입스크립트에서 함수가 2,3개의 파라미터를 가질 수 있다
// 타입스트립트에서 함수는 문자열이나 객체를 첫번째 파라미터가 될 수 있다
// 우린 이미 약간의 여러 모양의 다형성을 해본 것

// 제네릭이 어떻게 더 도움을 줄 수 있는지 알아보자
// 어떤 타입인지 상관없는 배열을 받고, 그 배열의 요소를 하나씩 프린트해주는 함수를 만들어보자

type SuperPrint = {
    (arr: number[]): void // call signature
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

// 첫번째 조건인 배열을 받아서, 그 배열의 요소를 각각 콘솔로 보여주는 작업을 끝냈다
// 문제는 배열의 타입이 여러개일 수 있다

type SuperPrint = {
    (arr: number[]): void // call signature
    (arr: boolean[]): void // boolean type 추가
}

superPrint([1, 2, 3, 4])
superPrint([true, true, false])
superPrint(["1", "2"]) // 오류

// call signature를 또 추가해줘야하는걸까???
// 아니 아니 아니
// 다형성을 활용하는 더 좋은 방법을 알아보자

// number[] >>> 이 타입들은 concrete type 이 아니다
// concrete type 이 뭔데요?
// 우리가 전부터 봐왔던 타입 / number, boolean, string, void, unknown 등등

// 우리는 타입스크립트한테 generic type을 받을거라고 알려줄것이다
// generic type 이 뭔데요?
// placeholder 같은 느낌 / 우리가 정해주는 이름
// concrete type 대신 사용해줄 수 있다 
// 타입스크립트가 타입을 추론해서 함수를 사용해줄 것이다

// 우린 지금 여러개의 call signature 를 받고 있는데
// 내가 이런 함수를 호출하고 싶다면?
superPrint([1, 2, true, false]) // 오류

// 내가 하고 싶은 건 어떤 타입이라도 함수가 잘 실행되는 것
// (arr: (number|boolean)[]):void
// 이렇게 모든 타입을 다 조합해서 만들어야 할까?
// 아니 아니 아니다

// 그래서 우리는 generic 을 사용할거다
// call signature를 작성할 때, 들어올 확실한 타입을 모를 때 사용!

// generic 사용하는 방법
// 1. 타입스트립트에게 사용하고 싶다고 알려주기
// call signature 앞에 <> 꺽쇠괄호를 쓰고 generic 이름을 쓴다
// 아무거나 써도 상관없지만 보통 T, V 를 많이 쓴다
type SuperPrint = {
    <mygeneric>(arr: number[]): void // call signature
}

// 2. 타입이 들어갈 부분에 우리가 적어줬던 generic 이름쓰기
type SuperPrint = {
    // <mygeneric>(arr: mygeneric[]):void // call signature
    <mygeneric>(arr: mygeneric[]): mygeneric
}
// 오류가 싹 사라졌음

// 이 함수는 이제 배열을 받고 배열의 첫번째 요소를 리턴할 것이다
// 위로 올라가서 call signature의 void를 제너릭으로 바꿔주자
const superPrint: SuperPrint = (arr) => arr[0]

// 변수에 담아주면 타입이 생긴다
const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, true, false])
const c = superPrint(["1", "2"])
const d = superPrint([1, 2, true, false])

// 정리
// 우리는 함수의 call signature를 입력할 때 placeholder 를 사용한 것이다
// 이것이 바로 다형성
// superPrint 함수는 많은 형태(타입)을 가지고 있다

// 우리는 타입스크립트에게 타입을 유추하도록 알려준 것
// 타입의 배열이 될 것이라는 것을 인지하고 그 타입 중 하나를 리턴하도록 알려준 것
// 나머지는 타입스크립트가 알아서 한다
// 모든 call signature 를 대체하고 다르게 만들어준다