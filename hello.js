    if (Meteor.isClient) {
      // counter starts at 0
      Session.setDefault('counter', 0);

      Template.hello.helpers({
        counter: function () {
          return Session.get('counter');
        }
      });

      Template.hello.events({
        'click button': function () {
          // increment the counter when button is clicked
          var counter = Session.get('counter');
          Meteor.call('AddOneToCounter',counter, function(err, result){
            Session.set('counter', result);
          });

        }
      });
    }

    if (Meteor.isServer) {
      Meteor.startup(function () {
        // code to run on server at startup
      });

      Meteor.methods({
        AddOneToCounter: function(counter){
          console.log("this do not appear if method call from android app");
          return ++counter;
        }
      });
    }
