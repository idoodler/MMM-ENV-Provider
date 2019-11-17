var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function start() {
        console.log("MMM-ENV-Provider", "Starting environmental variable injection");
        this.expressApp.get("/env", function (req, res) {
            res.send(process.env);
        }.bind(this));
    }
});