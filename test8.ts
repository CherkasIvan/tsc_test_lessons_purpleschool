function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}

logTime<string>("ewrwer");
logTime<number>(4);

function logTime2<T>(num: T): T {
  if (typeof num === "string") {
    num.toLocaleUpperCase();
  } else if (typeof num === "number") {
    num.toString();
  }
  console.log(new Date());
  return num;
}

interface MyInterface {
  transform: <T, F>(a: T) => F;
}

class myGenClass<T> {
  value: T;
}

const a8 = new myGenClass<number>();

interface ITimeStamp {
  stamp: number;
}

function logTimeStamp<T extends ITimeStamp>(time: T): T {
  console.log(time.stamp);
  return time;
}

const time1: ITimeStamp = {
  stamp: 2,
};

logTimeStamp<ITimeStamp>(time1);

// function logTimeString(num: string): string {
//   console.log(new Date());
//   return num;
// }
