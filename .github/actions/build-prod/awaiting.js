/* eslint-disable no-console */
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

let output = '';
let myError = '';
const buildProcess = async () => {
  try {
    
    const options = {};
    options.listeners = {
      stdout: data => {
        output += data.toString();
      },
      stderr: data => {
        myError += data.toString();
      }
    };
    await exec.exec('pwd', null, options);
    const { payload } = github.context;

    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payloadAsStr = JSON.stringify(payload, undefined, 2);
    console.log(`The event payload: ${payloadAsStr}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};
export { buildProcess, output };
