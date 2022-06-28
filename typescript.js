// #2.3 Types of TS part Two
type Age = number;
type Name = string;
type Player = {
    readonly name: Name,
    age?: Age
}
const playerMaker = (name: string): Player => ({ name })
const hye = playerMaker("hye")
hye.age = 24

// readonly 속성을 타입에 추가해보자
// 요소들을 읽기전용으로 만들기

hye.name = "jihye"
// Cannot assign to 'name' because it is a read-only property.

const numbers: readonly number[] = [1, 2, 3, 4]
numbers.push(1)
// Identifier expected.

const names: readonly string[] = ['1', '2']
names.push("3")

// 불변성을 가지게 된다

// tuple
// 배열을 생성한다
// 최소한의 길이를 가지고 특정 위치에 특정 타입이 있어야 한다
// ["hye", 24, true]
const player: [string, number, boolean] = ["hye", 24, true]
// 언제 써야할까
// 항상 정해진 갯수의 요소를 가져야 하는 배열에 지정
// 원하는 순서에 맞는 타입을 가져야할 때
// API가 배열을 줄 수도 있다 / 그럴 때 사용

player[0] = 1
// Type 'number' is not assignable to type 'string'. / 오류

// 읽기전용으로 변경도 가능
// const player: readonly [string, number, boolean] = ["hye", 24, true]

let a: undefined = undefined
let a: null = null
// 선택적 타입에는 undefined 가 들어갈 수 있다

// any
// 비어있는 값

let a: [] // any[]
// 타입스크립트로부터 빠져나오고 싶을 때 사용하는 타입

// any 사용을 막기 위해 추가하는 몇가지 규칙이 있다
// 되도록 사용하지 않는 것이 좋다 / 보호장치를 잃어버림

const a: any[] = [1, 2, 3, 4]
const b: any = true
a + b // 좋지 않습니다

// 가끔 any 를 써야할 때가 있다 그럴땐쓰세요 ~