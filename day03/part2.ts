import { Add } from 'ts-arithmetic';

type _Split<T extends string, Accum extends string[], Sep extends string = '\n'> =
    T extends `${infer Head extends string}${Sep}${infer Rest extends string}`
    ? _Split<Rest, [...Accum, Head], Sep>
    : 0 extends T['length']
        ? Accum
        : [...Accum, T];

type _Explode<T extends string> = _Split<T, [], ''>;

type _Process<T extends string, Accum extends string[]> = T extends `${infer Line1 extends string}\n${infer Line2 extends string}\n${infer Line3 extends string}\n${infer Rest extends string}`
    ? _Process<Rest, [...Accum, (_Explode<Line1>[number] & _Explode<Line2>[number] & _Explode<Line3>[number]) extends keyof Priority ? Priority[(_Explode<Line1>[number] & _Explode<Line2>[number] & _Explode<Line3>[number])] : never]>
    : Accum;

type Priority = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46, U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
};

type _TupleSum<T extends number[], Accum extends number> = T extends [infer First extends number, ...infer Rest extends number[]]
    ? _TupleSum<Rest, Add<Accum, First>>
    : Accum;


type Answer = _TupleSum<_Process<input, []>, 0>;
//   ^?


type input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;