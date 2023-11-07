# 6. Floating Promises

```shell
node src/6-floating-promises/index.js
```

This script is meant to write a series of letters to a file, one per line.
But it looks like they're getting written out of order.

There may be some kind of ... _floating_ Promise in there!

## Linting

Additionally, fun fact, [`@typescript-eslint/no-floating-promises`] can catch these!

Un-comment the rule in `src/6-floating-promises/.eslintrc.cjs`, then run:

```shell
npx eslint src/6-floating-promises/index.js
```

## Challenge

```shell
node src/6-floating-promises/challenge.js
```

Let's make it more difficult.
Augment the challenge code so that:

- There are no "floating" Promises
- There are no `await`s (the code doesn't seem to pause while writing)
