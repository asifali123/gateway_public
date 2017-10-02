import proxy from 'express-http-proxy';

// Middlewares
import authenticate from '../../middlewares/authenticate';
import isAdmin from '../../middlewares/isAdmin';

// Start a basic server returning a json message: "Hello world" at 3000 port before this server

export default (router) => {
    router.get('/', authenticate, isAdmin, proxy('localhost:3000', {
        // Pre proxy request changes
        proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
            // you can update headers
            proxyReqOpts.headers['x-special-proxy-header'] = 'foobar';
            // you can change the method
            proxyReqOpts.method = 'GET';
            return proxyReqOpts;
        },
        // Post proxy request changes
        userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
            let data = JSON.parse(proxyResData.toString('utf8'));
            data.newProperty = 'exciting data';
            return JSON.stringify(data);
        }
    }));
};