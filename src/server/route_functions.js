let routeFunctions = {
    postTextToAnalyse: function(req, res) {
        const newText = this.req.body;
        req.sendFile(path.resolve('src/client/views/index.html'))
        console.log(newText);
    }
};

module.exports = routeFunctions;