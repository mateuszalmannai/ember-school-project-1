import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    destroyItem(food){
      // saves automatically
      food.destroyRecord();
      // get people off of the page once they've destroyed a record
      this.transitionToRoute('foods');
    }
  }
});
