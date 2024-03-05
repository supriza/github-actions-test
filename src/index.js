import * as core from '@actions/core';
import * as exec from '@actions/exec';

import * as github from '@actions/github';

async function run() {
    const context = github.context;

    const runCmd: string = core.getInput('run-cmd');
    exec.exec(`${runCmd}`);
    // const prMessage: string = core.getInput('pr-message');
    if (!issueMessage && !prMessage) {
      throw new Error(
        'Action must have at least one of issue-message or pr-message set'
      );
    }

    const payload = context.payload.pull_request;

    exec.exec(`node ${payload}`);
}

run();
