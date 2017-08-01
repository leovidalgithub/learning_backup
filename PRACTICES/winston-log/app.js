let express = require( 'express' );
let app     = express();
var winston = require('winston');

  winston.log('winston.log', 'Hello distributed log files!');
  winston.info('winston.info again distributed logs');
  winston.level = 'debug';
  winston.log('debug', 'Now my debug messages are written to console!');

  var logger = new winston.Logger({
      level: 'info',
      transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'somefile.log' })
      ]
    });

logger.log('info', '2 Hello distributed log files!');
logger.info('2 Hello again distributed logs');


app.listen( '8080', function() {
	console.log( 'Now running on port 8080!' );
});
