var aws = require('aws-sdk');

var lambda = new aws.Lambda({
	region : 'us-west-2'
});

exports.handler = function(event, context) {
	lambda.invoke({
		FunctionName : 'a', // Function Name
		Payload : '{"date":"2015-11-11"}' // Data in payload
	}, function(error, data) {
		console.log('data', data)
		if (error) {
			context.done('error', error);
		}
		if (data.Payload) {
			console.log(data.Payload)
			context.succeed(data.Payload);
		}
	});
};