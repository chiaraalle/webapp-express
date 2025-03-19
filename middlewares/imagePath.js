function imagePath( req, res, next ){
    req.imagePath = `${req.protocol}://${req.get('host')}/images/`
    next();
}

export default imagePath