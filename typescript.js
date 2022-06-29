////  #3.0 Call Signatures
// 함수!
// 다형성(polymorphism)
// 오버로딩(overloading)
// 제네릭(generics)

function add(a: number, b: number) {
    return a + b
}
// 타입스크립트는 any 타입을 좋아하지 않는다
// 타입을 지정해주자

// 화살표 함수
const add = (a: number, b: number) => a + b

//// Call Signatures
// 인자에 타입을 작성하지 않고 싶어
// add 함수만의 타입을 만들고 싶어 >>> Call Signatures
// Call Signatures는 함수 위에 마우스를 올렸을 때 보게 되는 것
// 함수를 어떻게 호출(타입)해야하는 것인지 알려준다

// 맹글어보자
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b

// 장점
// 타입을 만들 수 있고, 함수가 어떻게 작동하는지 서술해놓을 수 있다
// 타입을 생각하도록 해준다 / 타입을 설명하고 코드를 구현함