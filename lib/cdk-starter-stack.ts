import * as cdk from 'aws-cdk-lib';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log('accountId: ', cdk.Stack.of(this).account);
    console.log('region: ', cdk.Stack.of(this).region);
    console.log('availability zones: ', cdk.Stack.of(this).availabilityZones);
  }
}
