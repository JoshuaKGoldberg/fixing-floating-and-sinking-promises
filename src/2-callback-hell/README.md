# 2. Callback Hell

```shell
node src/2-conditional-breakpoints/index.js
```

This script is supposed to poll a `./local.txt` file until it has text content, then log its text.
But there's a bug: it always logs `undefined` instead.

Furthermore, the same lines of code may run potentially many times before we'd want to trigger a debugger.
Let's use two additional kinds of breakpoints to investigate:

1. **Logpoint**: Logs value(s) instead of breaking
1. **Conditional Breakpoint**: Breaks only if a condition is met
