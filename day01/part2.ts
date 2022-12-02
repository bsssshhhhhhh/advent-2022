import { Add, Max } from 'ts-arithmetic';

type input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

type _TupleMax<T extends number[], Accum extends number> = T extends [infer First extends number, ...infer Rest extends number[]]
    ? _TupleMax<Rest, Max<Accum, First>>
    : Accum;

type _TupleSum<T extends number[], Accum extends number> = T extends [infer First extends number, ...infer Rest extends number[]]
    ? _TupleSum<Rest, Add<Accum, First>>
    : Accum;

type Elves<Input, Accum extends string[]> = Input extends `${infer Part extends string}\n\n${infer Rest}`
    ? Elves<Rest, [...Accum, Part]>
    : Input extends `${infer Part extends string}\n`
        ? [...Accum, Part]
        : Accum;

type ElfSum<T extends string, Accum extends number[]> = T extends `${infer Num extends number}\n${infer Rest}`
    ? ElfSum<Rest, [...Accum, Num]>
    : T extends `${infer Num extends number}`
        ? _TupleSum<[...Accum, Num], 0>
        : _TupleSum<Accum, 0>;

type ElfTotals<T extends string[], Accum extends number[]> = T extends [infer First extends string, ...infer Rest extends string[]]
    ? ElfTotals<Rest, [...Accum, ElfSum<First, []>]>
    : Accum;


type ElfCalorieTotals = ElfTotals<Elves<input, []>, []>;

type Filter<T extends any[], Value, Accum extends any[]> = T extends [infer First, ...infer Rest]
    ? First extends Value
        ? Filter<Rest, Value, Accum>
        : Filter<Rest, Value, [...Accum, First]>
    : T extends [Value]
        ? T
        : Accum

type Prev = [never, 0, 1, 2];
type PickTop3<Arr extends number[], Accum extends number[], Pos extends Prev[number] = 2> = 
    [Pos] extends [never]
    ? Accum
    : PickTop3<
        Filter<Arr, Accum[number] | _TupleMax<Arr, 0>, []>,
        [...Accum, _TupleMax<Arr, 0>],
        Prev[Pos]
    >;


type Answer = _TupleSum<PickTop3<ElfCalorieTotals, []>, 0>;
//   ^?

