/* eslint-disable no-console */
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const { payload } = github.context;
  const time = (new Date()).toTimeString();
  core.setOutput('time', time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payloadAsStr = JSON.stringify(payload, undefined, 2);
  console.log(`The event payload: ${payloadAsStr}`);
} catch (error) {
  core.setFailed(error.message);
}
