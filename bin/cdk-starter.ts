#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();
new MyCdkStack(app, 'my-cdk-stack-dev', {
  stackName: 'my-cdk-stack-dev',
  // 👇 now explicitly setting account and region
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
