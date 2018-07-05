var http = require('http');

var handleRequest = function(req, response) {
  console.log('Received request for URL: ' + req.url);
  response.writeHead(200);

  if (req.headers) {
    console.log('FROM req.headers')
    console.log('******************************')
    console.log('******************************')
    console.log('REMOTE_ADDR', req.headers['REMOTE_ADDR']);
    console.log('HTTP_CLIENT_IP', req.headers['HTTP_CLIENT_IP']);
    console.log('HTTP_X_FORWARDED_FOR', req.headers['HTTP_X_FORWARDED_FOR']);
    console.log('x-client-ip', req.headers['x-client-ip']);
    console.log('x-forwarded-for', req.headers['x-forwarded-for']);
    console.log('cf-connecting-ip', req.headers['cf-connecting-ip']);
    console.log('true-client-ip', req.headers['true-client-ip']);
    console.log('x-real-ip', req.headers['x-real-ip']);
    console.log('x-cluster-client-ip', req.headers['x-cluster-client-ip']);
    console.log('forwarded-for', req.headers['forwarded-for']);
    console.log('forwarded', req.headers.forwarded);
  }

  if (req.connection) {
    console.log('req.connection.remoteAddress', req.connection.remoteAddress);

    if(req.connection.socket) {
      console.log('req.connection.socket.remoteAddress', req.connection.socket.remoteAddress);
    }
  }

  if (req.socket) {
    console.log('req.socket.remoteAddress ', req.socket.remoteAddress );
  }

  if (req.info) {
    console.log('req.info.remoteAddress ', req.info.remoteAddress );
  }

  if (req.requestContext && req.requestContext.identity) {
    console.log('req.requestContext.identity.sourceIp ', req.requestContext.identity.sourceIp);
  }

  response.end('Hello from VERSION 1.0.1');
};
var www = http.createServer(handleRequest);
www.listen(8080);
