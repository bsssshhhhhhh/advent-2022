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

type SumOfSingleElf<T extends string, Accum extends number[]> = T extends `${infer Num extends number}\n${infer Rest}`
    ? SumOfSingleElf<Rest, [...Accum, Num]>
    : T extends `${infer Num extends number}`
        ? _TupleSum<[...Accum, Num], 0>
        : _TupleSum<Accum, 0>;

type ElfTotals<T extends string[], Accum extends number[]> = T extends [infer First extends string, ...infer Rest extends string[]]
    ? ElfTotals<Rest, [...Accum, SumOfSingleElf<First, []>]>
    : Accum;

type ElfCalorieTotals = ElfTotals<Elves<input, []>, []>;
type Answer = _TupleMax<ElfCalorieTotals, 0>;
//   ^?
