import proxy from 'express-http-proxy';

// Middlewares
import authenticate from '../../middlewares/authenticate';
import isAdmin from '../../middlewares/isAdmin';
import proxyMiddleware from '../../middlewares/proxy';

// Start a basic server returning a json message: "Hello world" at 3000 port before this server

export default (router) => {
    // router.get('/testing', authenticate, isAdmin, proxyMiddleware, proxy(function(req) { return req.URL; }, {
    //     // Pre proxy request changes
    //     proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    //         // you can update headers
    //         proxyReqOpts.headers['x-special-proxy-header'] = 'foobar';
    //         // you can change the method
    //         proxyReqOpts.method = 'GET';
    //         return proxyReqOpts;
    //     },
    //     // Post proxy request changes
    //     userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    //         const data = JSON.parse(proxyResData.toString('utf8'));
    //         data.newProperty = 'exciting data';
    //         return JSON.stringify(data);
    //     }
    // }));

    router.get('/testing',(req,res, next) => {
        try {
            throw 'something';
        } catch (error) {
            console.log(error);
            next(error);
        }

        // next();
        // res.send(200);
    });
};