 Sites = new Mongo.Collection("sites");

 Meteor.publish("sites", function () {
    return Sites.find();
  });
