# 8. Queues

Last step of the workshop!

```shell
npx tsx src/8-queues/index.ts
```

That queue was supposed to run up to only a certain number of tasks at once, using an `AsyncQueue` class.
But it seems to be just starting them all immediately.

Task: augment the `AsyncQueue` class to queue tasks until they're ready to run.

## Challenge

```shell
npx tsx src/8-queues/challenge.ts
```

Let's make it harder: write the queue so that its `.add` method returns the eventual result from the function.

> 👉 This is harder than it sounds.
> It should correctly return the resolved value even for a task that gets queued.
