console.log("A");

setTimeout(function () {
  console.log("B");

  setTimeout(function () {
    console.log("C");
  });
}, 1000);

setTimeout(function () {
  console.log("D");

  setTimeout(function () {
    console.log("E");
  });
});

console.log("F");
