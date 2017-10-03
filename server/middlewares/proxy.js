export default (req, res, next) => {
    //fetch the respective url
    req.URL = 'localhost:3000';
    next();
};