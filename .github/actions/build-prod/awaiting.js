/* eslint-disable no-console */
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const artifact = require('@actions/artifact');
const artifactClient = artifact.create()
const artifactName = 'my-artifact';

let output = '';
let outputData;
let myError = '';
const buildProcess = (async () => {
  try {
    const options = {};
    options.listeners = {
      stdout: data => {
        output += data.toString();
        outputData = data;
      },
      stderr: data => {
        myError += data.toString();
      }
    };
    await exec.exec('pwd', null, options);
    console.log({ output, myError });
    await exec.exec('ls -li > console.txt', null, options);
    const path = './console.txt';
    const options2 = {
      createArtifactFolder: false
    };
    const downloadResponse = await artifactClient.downloadArtifact(artifactName, path, options2);
    console.log({ downloadResponse });
    const { payload } = github.context;

    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payloadAsStr = JSON.stringify(payload, undefined, 2);
    console.log(`The event payload: ${payloadAsStr}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}) ();
export { buildProcess, output };
