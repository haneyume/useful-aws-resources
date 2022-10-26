#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { UsefulAwsResourcesStack } from '../lib/useful-aws-resources-stack';

const app = new cdk.App();

const usefulAwsResourcesStack = new UsefulAwsResourcesStack(
  app,
  'UsefulAwsResourcesStack',
);

cdk.Tags.of(usefulAwsResourcesStack).add('Project', 'Useful Aws Resources');
cdk.Tags.of(usefulAwsResourcesStack).add('Usage', 'Useful Aws Resources');
