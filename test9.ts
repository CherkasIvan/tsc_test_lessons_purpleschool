type IPoint1 = { x: number; y: number };
type P = keyof IPoint1;

function myFunc() {
  return { a: 1 };
}

type k = ReturnType<typeof myFunc>;

const myArr = [
  {
    name: "Вася",
    age: 30,
  },
];

type Person = (typeof myArr)[number];
type Age = (typeof myArr)[0]["age"];
type Name = (typeof myArr)[number]["name"];

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface IEmail {
  message: string;
}

interface ICat {
  test: number;
}

type EmailMessageContents = MessageOf<IEmail>;
type CatsMessageContents = MessageOf<ICat>;

interface Test9 {
  [key: string]: number;
}

type optionFlags<Type> = {
  [property in keyof Type]: boolean;
};
type world = "world";
type greeting = `hello ${world}`;
