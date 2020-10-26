let routeFunctions = {
    postTextToAnalyse: function(req, res) {
        console.log(this.req.body);
        const newText = this.req.body;
    }
};

module.exports = routeFunctions;