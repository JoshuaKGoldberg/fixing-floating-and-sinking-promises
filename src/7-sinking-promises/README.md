# 7. Sinking Promises

```shell
npx tsx src/7-sinking-promises/index.ts
```

This script is meant to log the contents of a file after a tenth of a second.
But in the case of the file read failing, it's hard failing instead of logging nicely.

There may be some kind of ... _sinking_ Promise in there!

> Tip: `rm local.txt` and run the script to see its issue.

## Linting

Additionally, fun fact, [`@typescript-eslint/no-misused-promises`] can catch these!

Un-comment the rule in `src/7-misused-promises/.eslintrc.cjs`, then run:

```shell
npx eslint src/7-misused-promises
```

## Challenge

```shell
npx tsx src/7-sinking-promises/challenge.ts
```

Let's make it more difficult.
Augment the challenge code so that:

- There are no "sinking" (or "floating") Promises
- All the queued tasks start running when `runAll()` is called
