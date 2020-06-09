const { buildProcess, output } = require('./awaiting.js');
buildProcess.then(() => {
  console.log({ output });
});