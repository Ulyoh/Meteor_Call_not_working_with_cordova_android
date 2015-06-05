/**
 * Created by yoh on 6/5/15.
 */

Meteor.methods({
  AddOneToCounter: function(counter){
    console.log("this do not appear if method call from android app");
    return ++counter;
  }
});