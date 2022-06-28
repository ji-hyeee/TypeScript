// #2.2 Types of TS part One
// basic type
let a: number = 1;
let b: string = 'hye';
let c: boolean = true;
let d: boolean[] = [true];

// optional type
const player = {
    name: 'hye'
}

player.name = 1 // 오류

// 타입스크립트와 소통하기
// 객체가 있거나 없거나하게 만들고 싶어요

const player: object = {
    name: 'hye'
}

// player.name
// Property 'name' does not exist on type 'object'.
// 타입을 적어줘도 object 에는 name 요소가 없다고 오류를 보낸다

// object의 타입을 정의하자
// const player : {} = {}

const player: {
    name: string, // 객체값의 타입
    age?: number
} = {
    name: "hye" // 실제 데이터
}

// age를 적거나 적지 않거나 하고 싶어요 (선택적)
// 물음표를 적어주자 !!!
// age?:number // number | undefined

// if(player.age < 10){

// }
// Object is possibly 'undefined'.

if (player.age && player.age < 10) {

}

// 만약 player를 엄청 많이 만든다면 ?
// 반복적으로 타입을 적고 값을 써야한다
// Alias(별칭) 타입을 생성하자

type Player = {
    name: string,
    age?: number
}

const hye: Player = {
    name: "hye"
}

// 타입재사용 !

// 타입마다 별칭을 사용해줄수도 있다
// type Age = number;
// type Player = {
//     name:string,
//     age?:Age
// }

// 함수의 return 값의 타입을 지정하는 방법을 알아보자
// 지금까지 변수에 타입을 할당해줬었다
// 함수가 반환하는 타입이 무엇인지 알면 자동완성, 보호장치가 더 많아진다

function playerMaker(name: string) { // 문자열 인자를 받을것이다
    return {
        name: name
        // name / 같은 이름을 가지면 name 만 써줘도 된다
    }
}

// 함수가 Player 타입을 리턴하게 만들고 싶다면?
// const jihye = playerMaker("hye") // 문자열 인자를 적어주세용
// jihye.age = 24 // 오류

// 타입스크립트에게 함수가 리턴하는 타입을 어떻게 말해줘야할까
// 기존에 썼던 것 그대로 해주자

function playerMaker(name: string): Player { // <<< Player 타입 적어주기
    return {
        name: name
    }
}

const jihye = playerMaker("hye")
jihye.age = 24

// 변수 뒤에 타입
// 인자 뒤에 타입
// 함수 뒤에 타입

// 화살표함수
// const playerMaker = (name:string) => ({name}) // 오류 타입정해주기 !
const playerMaker = (name: string): Player => ({ name })