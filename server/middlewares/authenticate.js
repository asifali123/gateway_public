export default (req, res, next) => {
    // Authenticate user here - URAM request
    req.user_id = '123';
    req.app_name = 'docx';
    next();
};