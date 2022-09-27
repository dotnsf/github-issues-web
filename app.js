//. app.js
var express = require( 'express' ),
    app = express();

app.use( express.static( __dirname + '/build' ) );

var port = process.env.PORT || 8000;
app.listen( port );
console.log( "server starting on " + port + " ..." );

