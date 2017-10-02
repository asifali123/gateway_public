export default (app) => {
    // error handling middleware must take four param method signature
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send(err || 'internal server error');
    });

};