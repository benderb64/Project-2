var express = require("express");

var db = require("../models");

var connection = require("../config/connection.js");

module.exports = function(app) {
// Get the locations from the database and return a JSON object.
app.get("/api/posts", function(req, res) {
      db.Locations.findAll({}).then(function(dbLocations) {
        return res.json(dbLocations)
      });
  });

// POST route to store user information in database.
app.post("/api/posts", function(req, res) {
  db.User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nature: req.body.nature,
    cost: req.body.cost,
    history: req.body.history,
    adventure: req.body.adventure,
    culture: req.body.culture,
    urban: req.body.urban,
    activity: req.body.activity,
    climate: req.body.climate,
    access: req.body.access,
    stay: req.body.stay,
  })
    .then(function(dbUser){
      res.json(dbUser);
    });
});

// POST route to compare results
app.post("/api/posts", (req, res) => {
  const userScores = [];
// Take all scores from user input, convert them to numbers, and push them into one array.
  for (i=3; i < req.body.length; i++ ) {
    req.body.body = req.body.body.maps(body => Number(body));
    userScores.push(req.body.body);
  }

// Empty variables to store results

  let bestMatch = "";
  let smallestDifference;

// Takes each location score and converts it into a number, then pushes it into one array. 
  dblocations.forEach(locations => {
    const locationScore = [],
    for (i=3; i < locations.body.length; i++ ) {
      locations.body.body = locations.body.body.maps(body => Number(body));
      locationScore.push()
    }

// Take the difference of each score and push it into it's own array.
    const differences = [];
    for (i=0; i < userScores.length; i++) {
      differences.push(Math.abs(userScores[i] - locationScore[i]));
    }

// Get the sum of the differences array.
    const result = differences.recude((acc, cur) => {
      return acc + curr;
    }, 0);

// If no Best Match exists, set current location as the best match and the smallestDifference as the current number.
    if(!bestMatch) {
      bestMatch = location;
      smallestDifference = result;
    }

// If a best match exists, compare the current result to the smallest difference, and replace if less.
    else if(result < smallestDifference) {
      bestMatch = location;
      smallestDifference = results;
    }
});

// Send the best match to the client. 
res.json(bestMatch);

});

};
