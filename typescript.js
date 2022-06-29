////  #3.1 Overloading
// 오버로딩(overloading)
// 외부 라이브러리 사용시 오버로딩을 많이 한다 / 알아보자

type Add = (a: number, b: number) => number;
type Add = {
    (a: number, b: number): number;
// } // 둘이 같은 함수

// 오버로딩이 뭐에요?
// 함수가 여러 개의 call signatures를 가지고 있을 때 발생
// 그냥 여러 개가 아니라 서로 다른 여러 개

// 예시
type Add = {
        (a: number, b: number): number
        (a: number, b: string): number // b의 타입을 바꿔보자
    }

const add: Add = (a, b) => a + b
// Operator '+' cannot be applied to types 'number' and 'string | number'. / 오류
// 이럴 땐 어떡할까요? >>> 타입에 따라서 연산을 달리 해줘야 한다

// 매우 나쁜 예시지만 오버로딩의 핵심을 보여준다
const add: Add = (a, b) => {
    if (typeof b === "string") return a
    return a + b
}


// 실제로 겪을 만한 예시를 알아보자
// Nextjs >>> 페이지를 바꿀 수 있다
// Router.push("/home")
// push 를 문자열로 주면 그 페이지로 이동한다
// Router.push({
//     path: "/home",
//     state: 1
// })
// 객체로도 가능
// 두가지 모두 잘 작동한다 (문자열/객체) >>> 오버로딩

// 고쳐보기
type Config = {
    path: string,
    state: object
}
type Push = {
    (path: string): void // 아무것도 리턴하지 않는 void 
    (config: Config): void
    // 둘 중에 하나를 보내준다
}

// 좋은 예시 / 이런식으로 오버로딩이 쓰인다
const push: Push = (config) => {
    if (typeof config === "string") { // 타입 확인
        console.log(config)
    } else {
        console.log(config.path, config.state) // 다른 타입의 경우
    }
}

// 다른 예시
type Add = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}
// 전에는 다른 call signature를 가지지만 같은 parameter 개수를 가졌다 / 파라미터 타입만 다름
// 이번엔 개수까지 다른다

const add: Add = (a, b, c) => {
    return a + b
}
// Type '(a: number, b: number, c: number) => number' is not assignable to type 'Add'.
// 왜 오류가 생길까요?
// 다른 개수의 파라미터를 가지기 때문
// 다른 개수의 파라미터를 가지면 나머지 파라미터도 타입을 지정해줘야 한다
// 지금 Add의 c 파라미터는 옵션이다 >>> a,b 를 호출하거나 a,b,c 를 호출하거나
// 그래서 c에 선택적으로 타입을 정해주자

const add: Add = (a, b, c?: number) => {
    if (c) return a + b + c
    return a + b
}

add(1, 2)
add(1, 2, 3)