class Point {
  readonly x6: number;
  y6: number;

  constructor(x: number, y: number) {
    this.x6 = x;
    this.y6 = y;
  }

  //   private func() {
  //     this.x6 = 10;
  //   }

  protected a() {}
}

const point = new Point(0, 0);

class D3Point extends Point {
  z6: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z6 = z;
  }

  a(name?: string) {}
}

const pointD3 = new D3Point(1, 1, 1);

class StaticTest {
  static c = 1;
}

const d6 = StaticTest.c;

abstract class Test6 {
  myMeth() {}
}

class Test7 extends Test6 {
  myMeth(): void {}
}

interface c {
  test: () => number;
}

class D implements c {
  test() {
    return 5;
  }
}
