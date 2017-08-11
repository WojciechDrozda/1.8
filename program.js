let http = require('http');
let fs = require('fs');

let server = http.createServer((request, response) => {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if(request.method === 'GET' && request.url === '/index') {
		fs.readFile('./index.html', 'utf-8', (err, data) => {
			response.write(data);
			response.end();
		});
	}else {
		response.statusCode = 404;
		fs.readFile('./cat.jpg', (err,data) => {
			response.writeHeader(200, {'Content-Type' : 'image/jpg'});
			response.end(data);
		});
	}
});
server.listen(8080);