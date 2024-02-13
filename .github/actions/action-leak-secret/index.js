const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `data` input defined in action metadata file
  const data = core.getInput('data');
  console.log(`Output: ${data}!`);
  console.log(`Object prototype:`, ({}).__proto__)
} catch (error) {
  core.setFailed(error.message);
}
