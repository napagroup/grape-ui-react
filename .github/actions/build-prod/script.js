import promise, { output } from "./awaiting.js";
promise.then(() => {
  console.log({ output });
});