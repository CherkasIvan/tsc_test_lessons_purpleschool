type TPoint = { x: number; y: number };
type stringOrNumber = string | number;
type T3DPoint = TPoint & {
  z: number;
};

interface IPoint {
  x: number;
  y: number;
}

interface I3DPoint extends IPoint {
  z: number;
}

function print(cord: TPoint) {}

const c = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
};

const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;

interface ITest {
  a: number;
}
interface ITest {
  b: number;
}
