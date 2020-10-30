let analysis = {};

let routeFunctions = {
    postTextToAnalyse: function(req, res) {
        const receivedText = req.query;
        if (receivedText) {
            newText = analysis.rawText = req.body;
            res.status(201).send(newText);
        }
        else {
            res.status(400).send();
        }
    }
};

module.exports = routeFunctions;