//** 002_Базовые_типы */

let a2: number = 5;
let b2: string = "5";
let c2: boolean = true;
// const d2 = a2 + c2; Обезопашивает от ошибки

let d: string[] = ["qqqq", "aaaa"];

let e: any = 3;
e = "s1";
e = false;

function test(a: number): number {
  return a;
}

const test2 = (a: string): string | number => {
  return test(2) - Number(a);
};

test2("2");

d = d.map((x) => {
  return x.toUpperCase();
});

function foundCoordinate(cord: { lat: number; long?: number }) {}

function printed(id: number | string) {
  console.log(id.toString());

  if (typeof id === "number") {
    console.log(id.toString());
  } else if (typeof id === "string") {
    id.toUpperCase();
  }
}
function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
    a.reduce(() => 2 + 2);
  }
}

const x: undefined = undefined;
const z: null = null;
