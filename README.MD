# Memoizer

This repository is a basic Memoizer implementation.

Memoization is best technique to save on memory or CPU cycles when we deal with repeated operations.

Basically, if the function is called with the same inputs, Memoizer helps directly return the result in the cache.

Here, i use a popular npm package [`memoizee`](https://www.npmjs.com/package/memoizee).

## Install

```bash
npm install @aya/memoize
yarn add @aya/memoize
```

## Example

```ts
import { memoize } from "./memoize";
...
class MyClass {
  @memoize()
  myFunction(a = undefined, b = undefined, c = undefined) {
    var result = a + " " + b + " " + c;
    this.helloFunc();
    return result;
  }
  helloFunc() {}
}
...

```

## Test

```bash
npm run test
```
