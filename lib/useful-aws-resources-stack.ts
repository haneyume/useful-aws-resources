import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import * as path from 'path';

export class UsefulAwsResourcesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /////////////////////////////////////////////////////////
    // Create Lambda Function
    /////////////////////////////////////////////////////////

    new NodejsFunction(this, 'MyHttpRequestFunction', {
      functionName: 'MyHttpRequestFunction',
      runtime: lambda.Runtime.NODEJS_16_X,
      entry: path.join(__dirname, './lambda/MyHttpRequestFunction/index.ts'),
      handler: 'handler',
    });

    /////////////////////////////////////////////////////////
    // Create IAM Role
    /////////////////////////////////////////////////////////

    new iam.Role(this, 'MyAdminStepFunctionsRole', {
      roleName: 'MyAdminStepFunctionsRole',
      assumedBy: new iam.ServicePrincipal('states.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
    });
  }
}
