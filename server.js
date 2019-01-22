/*
    Import 
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');


const FrontRouterClass = require('./routes/front/front.routes');
/*
    Configuration 
 */
const server = express();
const port = process.env.PORT;
class ServerClass {
    init() {
        //=> client folder
        server.set('views', __dirname + '/www');
        server.use(express.static(path.join(__dirname, 'www')));

        server.engine( 'html', ejs.renderFile);
        server.set('view engine', 'html');
        //=> set bodyparser
        server.use( bodyParser.json({limit:'10mb'}));
        server.use(bodyParser.urlencoded({extended:true}));

        //=> routers
        const frontRouter = new FrontRouterClass()
        server.use('/', frontRouter.init());
        
        //=> start server
        this.launch()
    }

    launch() {
        server.listen(port, ()=> {
            console.log(`Server listening on port ${port}`);
        });
    }
}
 /*
    Lancer le serveur  
 */
new ServerClass().init();

