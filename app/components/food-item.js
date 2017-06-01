import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeUnavailable(food){
      Ember.set(food, 'isAvailable', false);
      food.save();
    },
    makeAvailable(food){
      Ember.set(food, 'isAvailable', true);
      food.save();
    }
  }
});
