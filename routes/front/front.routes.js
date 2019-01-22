// Import

const express = require('express');
const frontRouter = express.Router();

//Definition
class FrontRouterClass {
    constructor() {

    }

    routes() {
        //=> homepage
        frontRouter.get('/', (req, res)=>{
            res.render('index');
        });
        frontRouter.get('/convert', (req, res)=>{
            res.render('convert');
        });
    }

    init() {
        this.routes();
        return frontRouter;
    }
} 

module.exports = FrontRouterClass;