"use strict";
//** 002_Базовые_типы */
let a2 = 5;
let b2 = "5";
let c2 = true;
// const d2 = a2 + c2; Обезопашивает от ошибки
let d = ["qqqq", "aaaa"];
let e = 3;
e = "s1";
e = false;
function test(a) {
    return a;
}
const test2 = (a) => {
    return test(2) - Number(a);
};
test2("2");
d = d.map((x) => {
    return x.toUpperCase();
});
function foundCoordinate(cord) { }
function printed(id) {
    console.log(id.toString());
    if (typeof id === "number") {
        console.log(id.toString());
    }
    else if (typeof id === "string") {
        id.toUpperCase();
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
        a.reduce(() => 2 + 2);
    }
}
const x = undefined;
const z = null;
