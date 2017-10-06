export default (req, res, next) => {
    //fetch the respective url
    req.URL = 'localhost:8081/get_data';
    next();
};