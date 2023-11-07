# 5. Desugaring

This part is more "for fun".
We won't be spending dedicated time going through it in the workshop.

But if you have the time, I'd encourage you to try stepping through it all separately.
Understanding how generators work under the hood can help you conceptualize higher-level concepts such as `async`/`await`.

> Note that these examples are slightly simplified from what really happens in JavaScript.
> Look up `Symbol.iterable` for a good time.

## Generators

```shell
node src/5-desugaring/generator.js
node src/5-desugaring/generator-desugared.js
```

Generators (`*` functions) compile down to a very rudimentary state machine.
`generateFruits()` creates two things:

- A `timeCalled` variable
- A returned object with a `next()` that increments `timeCalled`, then runs the appropriate logic

We call that object with `next()` an _iterable_.

## Async Await

Under the hood, an `async` function transpiles down to a generator.
Each `await` in the function is equivalent to a `yield`.
So each time the generator is called, it can step through the portions of the async function.

Transpilers such as TypeScript's can create an `__awaiter` helper that creates a `Promise` wrapping around the generator's `.next()` calls.
