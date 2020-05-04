// dependencies
var friendsData = require("../data/friends");

module.exports = function(app) {

  // api get requests
  // below code handles when users "visit" a page.

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      console.log(req.body.scores);

      var user = req.body;

      for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }

      var friendIndex = 0;
      var minDifference = 40;

      for (var i = 0; i < friendsData.length; i++) {
        var totDifference = 0;
        for (var j = 0; j < friendsData[i].scores.length; j++) {
          var difference = Math.abs(user.scores[j] - friendsData[i].scores[j]);
          totDifference += difference;
        }
        if(totDifference < minDifference) {
          friendIndex = i;
          minDifference = totDifference
        }
      }

      friendsData.push(user);

      res.json(friendsData[friendIndex]);
  });
};