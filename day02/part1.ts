import { Add } from 'ts-arithmetic';

type Values = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6
};

type _Split<T extends string, Accum extends number[], Sep extends string = '\n'> =
    T extends `${infer Head extends keyof Values}${Sep}${infer Rest extends string}`
    ? _Split<Rest, [...Accum, Values[Head]], Sep>
    : T extends `${infer Head extends keyof Values}`
        ? [...Accum, Values[Head]]
        : Accum;

type _TupleSum<T extends number[], Accum extends number> = T extends [infer First extends number, ...infer Rest extends number[]]
    ? _TupleSum<Rest, Add<Accum, First>>
    : Accum;


type _ComputeAnswer<T extends string> = _TupleSum<_Split<T, []>, 0>;


type Answer1 = _ComputeAnswer<input1>;
type Answer2 = _ComputeAnswer<input2>;
type Answer3 = _ComputeAnswer<input3>;

type FinalAnswer = Add<Answer1, Add<Answer2, Answer3>>;
//   ^?


// input split into 3 parts because the compiler can't handle it in 1 part
type input1 = `C Z
C X
B Z
A X
A Z
C Z
A Y
C Z
C Z
A X
C Y
A Z
B Z
C Z
C Z
B Z
C Z
B Z
C Z
A X
C Z
C Z
A X
C Z
B Z
B Z
C Z
C Z
B Z
A X
A X
C Z
C Z
A X
B Z
B Z
B Z
A X
A X
A X
B Z
C Z
C Z
C Z
B Z
C X
B Z
B Z
A X
C Z
C Z
B Z
A Y
A Z
C X
A X
C Z
C Z
B Z
C Z
C Z
C X
C Z
A X
B Z
B Z
C X
C Z
B Z
B Z
C Z
B Z
B Z
C Z
B Z
A Z
A X
C Z
B X
B Z
C Z
C Z
A Z
B Z
C Z
B Z
B Y
A Z
C Z
B Z
A X
A Y
C Z
B Z
B Z
A X
B Z
A Z
B Z
C Z
C Y
C Z
B Z
C Z
C Z
C Z
C X
B Z
B Z
B Z
B Z
A X
C Z
C Z
A X
C Z
B Z
B Z
C Z
C Z
C Z
A X
B Z
C Z
B Z
B Z
C X
A Z
B Z
C Z
A X
A X
A X
B Z
B Z
B Z
B Z
B Z
B Z
C Z
B X
C Z
C Z
B X
C Z
C Y
A X
C Z
A Z
A X
B Z
B Z
B Z
C Z
C X
A Z
C Z
C Y
A Y
A X
B Z
B X
C Z
A Z
C Z
B Z
B Z
A X
B Z
A X
C Y
B Z
B Y
A Z
B Z
A X
C Z
A X
C Z
B Z
A Z
B Z
A Y
C Z
C Z
C Z
B X
C Z
A X
B X
B Z
C Z
A X
B Z
B Z
A Z
B Y
B Z
B Z
C Z
C Z
B Z
C Z
B Z
A X
B X
A X
C Y
B Z
C Z
C Z
C Z
B Z
B Z
C Z
A X
A Y
C Z
B Z
B Z
C Z
B Y
C Z
B Z
C Z
B Z
B Z
C X
B Z
A Z
A X
A X
C Z
B Z
C Z
C Z
C Z
B Z
A Y
C Z
C Z
C Z
B Z
C Z
B Z
A X
C Z
B X
C Z
A X
B X
A Z
B Z
B X
A X
C Z
A Y
A Y
C X
C Z
C Z
A X
A Y
B Z
A Z
B Z
A X
C Z
B X
B Z
B Z
B Z
B Z
C Y
B Z
B Z
B Z
A Z
A Y
C Z
C Z
B Z
A Z
A X
A Y
C Z
B X
C Z
A X
A Z
B Z
A X
A X
C X
A X
A X
A Z
C Z
B Z
C Z
C Z
B Z
B Z
A Y
B Z
B Z
C Z
B Z
A Y
A X
B Z
C Z
B Z
A X
C Z
C Z
C Z
B Z
A Z
C Z
C Z
B Z
C X
B Z
B Z
B Z
A Y
A X
B Z
C Z
C Z
A Z
B Y
C Z
B Z
B Z
B Z
A X
A X
C Z
C Z
A X
C Z
B Z
A X
B Z
A X
B Z
B Z
A X
A X
C Z
A Y
A Z
B Y
C Z
C Z
B Y
A Z
C Z
B Z
C Z
C Z
B Z
C Z
A Y
C Z
A X
B X
C Z
A Y
B Z
B Z
C Z
B Z
A X
B Z
B Z
B Z
B Z
B Z
A Z
B Z
B Y
C Z
B Z
C Z
C X
B Z
B Z
B Z
B Z
A X
B Z
B Z
C Z
B Z
A X
A X
A Z
C Z
C Z
A X
A X
C Z
C Z
C Z
A Y
C Z
B Z
C Z
C Z
A Y
C Z
B Z
C X
A X
C Z
C Z
C Z
C Z
A X
C Z
C Z
A Y
C Z
C X
A X
C Z
B Z
C Z
A Z
B Z
B X
A Z
C Z
C Z
A X
C X
B Z
A Y
C Z
A X
B Z
C Z
A X
B Z
A X
C Z
C Y
B Z
A Y
B Z
B Z
B Z
B Z
A X
B Z
B Y
C Z
C Z
B Z
B Z
C Z
B Y
B Z
B Z
B X
B Z
C Z
B Z
A Y
A X
A X
C Z
C X
C Z
B Z
A Z
C Z
C Z
B Z
A Y
C Y
A X
A X
A X
B Z
A X
B Z
B Z
A Y
B Y
C Z
B Z
B Z
C Z
A X
A X
C Z
A Z
B Z
B X
B Z
B Z
A Y
C Z
B Z
A X
C X
C Z
C Z
B Z
A Z
C Z
C Z
C Z
C Z
C Z
C Y
C Z
B Z
B X
C Z
B Z
B Z
B Z
B Z
C Z
B Z
C X
C Z
B X
C Z
A Y
C Z
B Z
B Z
B Y
C Z
A X
B Z
C Z
C Y
A Y
A X
C Z
B Z
C Z
B Z
A X
A Y
A Y
B Y
C Z
C Z
C Z
B Z
C Z
A X
B Z
B X
B Z
C Z
C Z
B Z
B Z
B Z
B Z
A X
A Z
A Y
B Z
B X
B Z
C Y
B Y
B Z
B Z
B Z
C Y
C Z
B Z
A X
A X
A X
C Z
A Y
B Z
B Z
B Z
B Z
A X
B Z
B Z
C Z
B Z
A X
A X
A X
C Z
C Z
B Z
C Z
C Z
C X
B Z
C Z
C Z
B Z
A Y
B Z
B Z
C Z
C X
C Y
A X
C Z
A X
C Z
C Z
C Z
B Z
B Z
A Y
B Z
B Z
C Z
C X
C Z
B Z
B Z
B Z
C X
B Y
B X
A Z
C Z
B Z
A Z
B Y
B Z
A X
B Z
B Y
B Y
B Z
C Z
A X
C Z
B Z
C Z
C Z
A X
C Y
A Z
B Z
C Z
C Z
A X
B Y
C Z
C Z
A Z
C Z
B Z
B Z
C Z
B Z
A X
B Z
A Y
B Z
C Z
B Z
C Z
B Z
A Y
A X
A Y
C X
C Z
A X
C Z
A Z
C Z
C Z
A Z
C Z
A Z
B Z
C Z
B Z
A Z
B Z
B Z
A X
A Y
A X
C X
B Z
C Z
B Z
A X
C Z
B Z
A X
C Z
A X
C Y
A Y
C Z
C X
B Z
B Z
A X
C Z
B Y
C Z
A Y
B X
C Z
A X
B Z
C Z
C Z
C Z
B Z
B Z
A Z
C Z
A Y
B Z
B Z
A Y
B Z
B Z
B Z
C Z
B Z
C Z
A X
B Z
B Z
C Y
C Z
A X
C Z
C Z
C Z
C Y
C Z
A Z
B Z
B Z
C Z
B X
B Z
B Z
A Z
A X
C Z
C X
C Z
A Y
B Z
C Z
B Z
C Z
C Z
C X
B Z
B X
A Z
B Z
B Y
C Z
C X
C Z
A Z
C Z
B Z
C Z
C Z
C Y
C X
C Y
A Z
C X
A X
C Y
B Y
A Z
B Y
C Z
C Z
C Z
B Z
C Z
A X
C Z
A X
B Z
C Z
C Z
A Y
B Z
C Z
C Z
C Z
A X
B Z
C Z
B Z
C Z
B Z
B X
B Z
C Z
B Z
B Z
A Z
A Y
B Z
B Z
B Z
C Z
B Z
B Z
B Z
A Y
C Z
A X
C Z
A X
B X
C Z
B Z
B Z
B Z
C Z
C Z
C X
B Z
B Z
C Z
B Z
C X
A X
B Y
A X
A Z
B Z
C Z
B Z
C X
B X
A Z
C Z
C Z
C Z
A Z
B X
C Z
B Z
A X
B Z
C Z
A X
B Z
C Z
C Z
B Z
C Z
C Z
B Z
C Z
A Z
C Z
A Y
B Z
B Z
B Z
C Z
A Y
C Z
B Z
C Z
B Z
A Z
C Y
C Z
C Z
A X
C Z
B Y
C Z
B Z
A Z
B Z
C Z
B Z
C Y
B Z
C Z
C Z
B Z
C Z
C Z
C Z
C Z
C Z
A X
A Z
A Y
A Y
C Z
A X
A Z
B Z
A Y
A X
B X
C Z
A Y
B Z
B Z
B Z
B Z
A Z
C Z
A X
B Y
C Y
C Y
C Z
C X
A X
A Y
B Z
A Z
A X
C Z
C Z
B Z
C Z
A Y
B Z
A X
C X
A X
B Z
C Z
C Z
A Y
A X
B Z
B Z
B Z
C Z
B Z
B Z
B Z
B X
C Y
C Z
C Z
B X
B Z
B Z
C Z
A X
B Z
B Z
B Z
A Z
B Z
B Z
B Z
C Z
A X
C Y
C Z
B Z
B Z
B X
A Z
A X
B Z
B Z
A Y
B Z
B Z
C Z
C Z
C X`;

type input2 = `B X
B Z
C Z
C Z
A X
C Z
A Z
C Z
C Y
A X
B Z
A X
A X
C Z
B X
C Z
A X
C Z
C Z
C Z
A Y
A X
C Z
A Z
C Z
B Z
C Y
C Z
B Z
A Y
C Z
B X
A X
B Z
C Z
A X
B X
B Y
B Z
B Z
A Y
B Z
B X
B Y
B Z
C Z
C Z
A Z
A X
C Z
A Z
C Z
A X
C Z
C Z
B Z
B Z
C Z
C X
C Z
A X
C Z
B Z
C Z
A X
A X
A X
C Z
C Z
A Z
C Z
B Z
A X
B Z
B X
C Z
B Z
C Z
B Z
B X
C Z
A Z
A Z
C Z
B Z
B Z
B Z
C Z
C X
B Z
A X
B Z
B Z
C Z
B Z
C Z
B Z
B X
C Z
C Z
A X
C Z
C Z
B Z
A X
C Y
B Z
C Z
A Y
B Z
C Z
A X
B Z
C Z
C X
A Z
C Z
C Y
B Z
B Z
A X
B Z
B Z
A Z
C Z
B Z
A X
A Z
B Z
B Z
C Z
C Z
A X
A Y
B Z
B Z
A Y
A X
C Z
A Y
A X
C Z
C Z
B Z
A X
C Z
A X
C Z
B X
C Z
B Z
C Y
B Z
C Y
C Z
B Z
B Z
A Y
C Z
C Y
A X
B Z
B Z
A X
B Z
B Z
B Z
A X
A Y
C Z
C Z
C X
B X
A X
A X
B Z
A X
B Z
B Z
B Z
B X
C Z
C Z
B Z
C Z
C Z
A X
B Z
C Z
C Z
C Z
C Z
B Z
C Z
C Z
B Z
B Z
A X
C Z
B Z
C Z
C Z
C Z
B Z
A X
C Z
A Y
B Z
C Z
C Z
C Z
A X
B Z
C Y
C Z
C X
B Z
B Z
B Z
A Z
C Y
B Z
B Z
B Z
C Z
C Y
A X
B Z
B Z
C Y
C Z
A X
A Z
C X
C X
A Z
B X
A X
C Z
C Z
B Z
C Z
B Y
C Z
C Z
B Z
B Z
A Z
B Z
B Z
A X
C Z
B X
B Y
B Z
C Y
C Z
B Z
A Z
C Z
C Z
B Z
C Z
A Z
C Z
A X
C Z
C Z
A Z
C X
C Z
A X
C Z
A X
C Z
A X
A Z
B Z
C Z
C Z
C Z
A X
A Z
C Z
C Y
A Y
C Y
C Z
B Y
A X
C Z
B Z
C Z
C Z
B Z
C Z
B Z
C X
C Z
B Z
C Z
A X
A X
A X
B Z
B Z
B Z
A X
A Z
B Z
C Z
C Z
A X
A Y
C Z
A X
C Z
A Y
A X
A Z
A Z
C Z
C Z
B Y
C Z
A X
B Z
A Z
B Z
C Z
A X
C X
B Z
B Z
C Z
C Z
A X
B Z
C Z
B Z
A X
B Z
C Y
A X
B Z
B Z
C Z
C Z
A X
B Z
B Z
C Z
B Z
C Z
A X
C Z
C Z
B Z
A X
C Z
B Z
B X
C Z
C Y
B X
A Z
A Z
C Z
A Y
B X
B Z
C Z
C Z
C Z
A Z
C Z
C Z
C Y
C Z
B Z
A Z
A Z
C X
C Z
B Y
C Z
C Z
C X
B Y
A X
C X
A Y
C Z
A Y
C Y
A X
B Z
C Z
B Z
A X
A X
C Z
B Z
A X
C Z
A Y
C X
B Z
C Z
C Z
A X
C Z
C Z
A X
C Y
A X
A X
C Z
B Z
A X
A X
C Z
A X
C Z
B Z
A Z
C Z
B X
C Z
C Z
B Z
A Y
A X
C Y
B Z
B Z
B Z
A X
A Z
C Z
C Z
C Z
A Z
B Z
C Z
A Z
B Z
C Z
A X
A X
B Z
A X
C Z
C Z
B Z
C X
B Z
A X
A X
C Z
C Z
B Z
A X
A Y
B Z
A X
C Z
C Z
A X
A Y
A X
C X
A Y
A X
B Z
C Y
B Z
C Z
C Z
B Z
C Z
C Z
C X
C Z
C X
B Z
B Z
C Z
B X
C Z
B Z
C Z
C Z
A Y
B X
A X
A Y
A X
B Z
C Z
C Z
A X
C Y
B Z
B Z
B Z
B Z
A X
C Z
A X
B Z
C Z
A Z
C X
B X
C Z
B Y
A Z
A Y
A X
C Z
B X
B Z
A Z
A X
A Z
C Z
B Z
C Z
A X
B Z
C Z
B Z
B Z
C Z
B X
B Z
A X
A X
A X
B Z
B Z
B Z
A X
C Z
C Y
B Z
B X
C Z
C Y
B Z
A X
C Z
C X
A X
B Z
C Z
A Z
B X
B Z
A X
C Z
B Z
B Z
B X
A Y
C Y
B Z
C Z
C X
C Z
B Z
C Z
A X
A X
B Z
A X
B Z
B Z
C Z
C Z
A X
B Z
C Y
B Z
C Z
C Z
C Z
B Z
B X
C Z
C Z
C Z
B Z
B Z
C Z
A X
A Y
B Z
C Z
A Z
B X
B Z
C Z
C Z
B Z
C X
B Z
C Z
A X
B Z
A X
B Z
B Z
C X
A Y
C Z
C Z
A X
B Y
C Z
B X
C Z
B Z
A Z
A X
A X
A Z
A X
A X
C Z
C Z
C Z
C Z
B Z
A Y
B Z
B Z
C Z
B Z
C Z
C Z
B Z
B X
A Y
C Z
C Z
B Z
B Z
C Z
B Z
B Z
C Z
C Z
A Z
C Z
B Z
B Z
C Z
C Z
C Y
C Z
A Y
B Y
C Z
A X
B Z
C Z
A Y
B Z
B Z
B Z
C Z
C Z
A X
A X
C Z
C X
B Z
C X
A Z
C Z
B Z
C Z
C Z
C X
B Z
C Z
B Z
C Z
A X
C X
C Z
C Z
B Z
C Z
C Z
B Z
B Z
A X
C Z
C Z
B Z
A X
A X
C Z
A Y
B Z
C Z
C Z
C Z
B X
C Z
C Y
B Z
B Z
C Y
A X
A Y
C Z
A Z
B Z
A X
B Z
C Y
B Z
C Z
B Z
B Z
B Z
A X
C Z
B Z
C Z
C Z
C Y
C Z
A Y
C Z
C Y
A Z
B Z
C Z
A X
B Z
B Z
C Z
C X
A X
C Z
A Z
A X
C Z
A Z
C Z
B Z
A Z
C Z
B Z
B Z
B X
B Z
C Z
A X
C Z
B Z
B Z
A X
B Z
C Z
B Y
A X
A Z
C Z
B Y
A Z
A Y
C X`;

type input3 = `B Z
B Z
C X
C Y
A X
A Y
C Z
A X
A Z
B Z
B Z
A X
A X
C Z
A X
C X
A X
C Z
A X
B Z
C Z
B Z
B Z
A X
C Z
B Z
B Z
B Z
A X
C Z
A X
B Z
C X
B Z
A Z
A X
C X
C Y
B Z
C Z
C X
B Z
A X
C Z
B Z
A X
B Z
A Z
C Z
B Z
C X
B Z
C Z
A Z
A X
A X
A Y
A X
C Z
B Z
C Z
A X
C Z
C Z
B Z
C Z
C Z
C Z
C Z
C Z
C Z
B Z
B Z
B Z
B Z
B Z
C Z
B Z
B X
C Z
B Y
B Z
C Y
A Z
B Z
A Z
B Z
C Z
C Z
C Z
B Z
A X
C Z
A X
B Y
C Z
C X
B Y
A X
C Z
C Z
A Y
A X
B Z
A Y
B Z
C Z
C Z
A X
B Z
B Z
C Y
C Z
B Z
C Z
B X
C Z
B Z
B X
A Y
A X
C Z
B Z
B Z
C Z
B Z
A Y
C Z
A Y
B Z
C Z
B Z
A Z
B Z
C Z
C Z
A Z
C Z
C X
A Y
A X
C Z
B Z
C Z
C Y
C Z
C Z
B Z
C Z
C Z
B Z
C X
B Y
C Z
B Z
A X
C Z
B Z
B Z
A Y
C Z
C Z
B X
B Z
C Z
A Z
C Z
A Z
C Z
C Z
B Z
C X
B Y
C Z
C Y
C Z
C Z
C Z
A X
A X
B Z
C Z
C Z
B Z
C Z
A X
C Z
C Y
A X
B Z
B Z
A X
A Y
B Z
B X
A X
C Z
C Z
B Z
A Z
B Z
B Z
C Y
A Y
B X
C Z
A Z
A Z
B Z
A Z
C Y
B Z
B Z
C Z
A X
C Z
C Z
B Z
B Z
C Z
C Z
C Z
A Y
B Z
C Z
A Z
C Z
A X
B Z
C Z
A Y
B Z
B Y
C Z
B Z
C Z
C X
A X
B Z
B Z
C Z
A X
A X
B Z
C Z
B Z
C Z
B X
B Z
B Z
B Z
C Z
B Z
B Z
C Z
A X
A X
C Z
B Y
A X
A Z
B Z
B Z
B Z
C X
B X
B Z
C Z
A X
A Z
B X
A Z
B Z
C Z
A Y
C Z
B Y
B Z
B Y
C Z
A Z
C Z
B Z
C Z
C Z
A X
A X
B Z
B Z
B X
B Y
A X
C Z
B Z
C Z
B X
C Z
B Z
C Y
C Z
B Z
A X
A Z
B Y
A X
B Z
A X
C Z
B Z
C Z
B Z
C Z
C Z
A X
C Z
B Z
B Z
A X
B Y
C Z
B Z
C X
B Z
C Z
B Z
B Z
B Z
C X
B X
C Z
A X
B Z
B Z
B Z
C X
B Z
C Z
B Z
A X
C Z
C Z
B X
C Y
C Z
B Z
B Y
C Z
B X
C Z
A Z
C Z
C Z
B Z
B Z
A Z
A X
B Z
C X
B Z
C Z
B Z
C Z
C Z
B Z
A X
B Z
C Z
C Z
C Z
C Z
A Y
B Z
B Z
C Z
B Z
C Z
C Z
B Z
A Y
C Z
C Z
C X
B Z
A X
B Z
C Z
C Z
C Y
B X
C Z
B X
B Z
B X
A X
A X
A Y
A Y
A Z
A Z
C Z
C Z
C Z
C Z
C Z
A X
A X
C X
B Z
B Z
C Z
C Z
A X
C Z
A X
B Z
C X
B Z
C Z
B Z
B Z
B Z
C Z
C Z
A X
A X
C Z
C Z
A X
A Y
B Z
A Z
A X
C Z
B Z
C Z
C Z
A X
A X
C Z
A X
B Z
C Z
C Z
A Z
C Z
C Z
A X
B Z
A X
B Z
C Z
B Z
C Z
C Y
A Z
A X
C Z
B Z
C X
A Z
B Z
B Z
C Z
A X
B Z
A X
C Z
B Z
B Z
B Z
B Z
A Z
B Z
B Z
C Z
A X
B Z
C Z
C Z
C Y
A X
A X
B Z
C Z
C Z
B Z
C Z
C Y
C Y
A X
C Z
C Z
A X
B Z
B Z
C Z
A Y
A Y
C Z
B Z
C X
B Z
B Z
C Z
A X
B Z
A X
C Z
C Z
A X
B Y
C Z
B X
C Z
C Z
B Z
A X
B Z
A Y
C Z
C X
A X
A Y
C Z
B Y
B Z
B Z
B Z
A Z
B Z
C Z
B Z
B X
B Z
C Z
B Z
C Z
B Z
A X
B Z
A Z
C Z
B X
A X
C Z
B Z
C Z
A Z
A X
B Z
B Z
B Z
B Z
C Z
B Z
C Z
B Z
B Z
B Z
B Z
C Z
C Z
C Y
A Y
C Z
C Z
B Z
B X
A X
C Z
A Y
C Y
C X
C Z
C Z
B Z
B Z
C X
A Z
B Z
C Z
C Z
A X
C X
B Z
B Z
A X
B X
B Z
C Z
B Z
C Z
C Y
B Z
B Z
B Z
C Z
A Z
C Z
C X
C Z
B Z
B Z
A Y
B Z
C X
C Z
A X
C Z
B Z
A X
C Z
A Y
B Z
B Z
A X
B Z
B Z
C Z
B Z
B Z
C Z
B X
B Z
B Z
A Y
C Z
B Z
C Z
B Y
C Z
A X
C X
A X
C Z
A Z
A Y
C Z
C Z
A Y
B Z
B X
C Z
A X
B Z
C Z
C Z
C Z
B Z
A Y
A Y
C X
B Y
C Z
B Z
A X
C Z
A Z
B Z
A X
B X
A Z
B Y
A Z
A Y
B Z
B Z
A Z
B Z
A Z
B Z
B Z
C Z
A Z
C Z
C Z
C Z
A Z
C Z
B Z
A X
B Z
A X
A X
B Z
B Z
C Z
B Z
A X
C X
B Z
C Z
C Z
C Y
C Z
C Z
B Z
B Z
C Z
B Y
A X
C Z
C Z
C Z
C Z
C Z
C Z
B Z
B Z
C Z
C Z
A X
C Z
C Z
A X
B Z
B Z
C Z
B Z
C Z
B Z
B Z
B Z
B Z
C Z
C Z`;