import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model.food').save();
      this.transitionToRoute('foods.food', this.get('model.food.id'));
    }
  }
});
