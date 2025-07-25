enum direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Decision {
  Yes = 1,
  No = calcEnum(),
}

function calcEnum(): number {
  return 2;
}

function runEnum(obj: { Up: string }) {}

runEnum(direction);

enum Test {
  A,
}
let test7 = Test.A;
let nameA = Test[test7];

const enum ConstEnum {
  A,
  B,
}

const c7 = ConstEnum.B;

enum Dice {
  One = 1,
  Two,
  Three,
}

function ruDice(dice: Dice) {
  switch (dice) {
    case Dice.One:
      return "a";
    case Dice.Two:
      return "b";
    case Dice.Three:
      return "c";
    default:
      const a: never = dice;
  }
}
