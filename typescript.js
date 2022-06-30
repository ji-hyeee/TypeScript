//// #3.3 Generics Recap
// type SuperPrint = {
//     <T>(a: T[]):T
// }
type SuperPrint = <T>(a: T[]) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, true, false])
const c = superPrint(["1", "2"])
const d = superPrint([1, 2, true, false, "hello"])

// 제너릭을 사용하면 타입스크립트는 내가 쓴 코드를 보고 타입을 유추한다
// 아무거나 넣어서 리턴되면 그렇다면 제너릭대신 any를 쓰면 되는 거 아닌가요?
// type SuperPrint = (a: any[]) => any
// d.toUpperCase() >>> 오류 / 배열의 첫번째 요소를 리턴하는데 d는 숫자로 시작하므로 오류
// 제너릭을 사용하면 꼭 <>꺽쇠괄호로 제너릭 이름을 설정해주자 ! / 안 그러면 타입을 인식

// superPrint 타입 제네릭을 하나 더 추가해주고 싶다면?
// 진짜 말 그대로 제네릭을 하나 더 추가해주면 된다
type SuperPrint = <T, V>(a: T[], b: V) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4], "") // Expected 2 arguments, but got 1.
const b = superPrint([true, true, false], 1)
const c = superPrint(["1", "2"], true)
const d = superPrint([1, 2, true, false, "hello"], []) 