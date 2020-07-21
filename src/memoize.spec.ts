import { memoize } from "./memoize";

class MyClass {
  @memoize()
  myFunction(a = undefined, b = undefined, c = undefined) {
    var result = a + " " + b + " " + c;
    this.helloFunc();
    return result;
  }
  helloFunc() {}
}

describe("Memoize", () => {
  it("should called a function that called with same parameteres more than once only one time", () => {
    const newObj = new MyClass();
    spyOn(newObj, "helloFunc");
    newObj.myFunction(1, 2, 3);
    newObj.myFunction(1, 2, 3);
    expect(newObj.helloFunc).toHaveBeenCalledTimes(1);
  });

  it("should called a function that called with different parameteres as many it called", () => {
    const newObj = new MyClass();
    spyOn(newObj, "helloFunc");
    newObj.myFunction(1, 2, 1);
    newObj.myFunction(2, 4, 6);
    newObj.myFunction(0, 0, 0);
    newObj.myFunction(2, 2, 2);
    expect(newObj.helloFunc).toHaveBeenCalledTimes(4);
  });
});
