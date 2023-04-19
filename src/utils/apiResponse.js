"use strict";
module.exports = {
	//success,
	error
};
// function success(message = null, data = null, code = 200,) {
// 	let responseData = data;
// 	const status = {
// 		code: code,
// 		message: message
// 	};
// 	if (!message) status.message = "OK";
// 	if (typeof message === "object") {
// 		status.message = "OK";
// 		outputData = message;
// 	}
// 	console.debug("Message................",message);
// 	console.info("Final Response", responseData);
// 	return { ...responseData };
// }

function error(message = null, code = 400) {
	const status = {
		code: code,
		message: message
	};
	if (message.code)
		status.code = message.code; 
	if (message.message)
		status.message = message.message; 
	if (!message)
        status.message = "ERROR";
    
	console.error("Final Error Is ", status);
	return {
		status
	};
}