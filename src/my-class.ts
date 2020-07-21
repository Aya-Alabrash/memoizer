import { memoize } from "./memoize";

export class MyClass {
  @memoize()
  myFunction(a = undefined, b = undefined, c = undefined) {
    var result = a + " " + b + " " + c;
    return result;
  }
}
