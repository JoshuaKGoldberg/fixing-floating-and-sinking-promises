# 1. Callbacks

```shell
node src/1-callbacks/index.js
```

This script is supposed to log the text content of a `./local.txt` file.
But there's a bug: it always logs `undefined` instead.

Let's practice different ways of debugging a Node application:

1. VS Code's built-in debugger: place breakpoints in the file, press <kbd>F5</kbd>
2. Manually attaching to a Node process in VS Code with `node --inspect-brk`
3. Chrome/Chromium developer tools > Node
