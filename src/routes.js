const apiRoutes = (app)=>{
    app.use('/api/user', require ('./api/user'));
    app.use('/api/task', require ('./api/task'));

}


module.exports = {
    apiRoutes: apiRoutes
}