exports.handler = function(event, context) {
	console.log('event', event);
	context.succeed({
		data : " successresponse_data from A function"
	});
};