
// Middlewares
// import authenticate from '../../middlewares/authenticate';
// import isAdmin from '../../middlewares/isAdmin';
// import proxy from './../../middlewares/proxy';

import httpProxy from 'http-proxy';
const apiProxy = httpProxy.createProxyServer();
const ms1 = 'http://localhost:8081/testing';


// Start a basic server returning a json message: "Hello world" at 3000 port before this server
export default (router) => {

    router.get('/proxy',function (req,res) {
        console.log('redirecting to ms1');
        req.url = '';
        apiProxy.web(req,res,{target:ms1});
    });

};