import Ember from "ember";

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  newItem: null,
  actions: {
    makeUnavailable(food){
      Ember.set(food, 'isAvailable', false);
      food.save();
    },
    makeAvailable(food){
      Ember.set(food, 'isAvailable', true);
      food.save();
    },
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
        // call save() to propagate to the server
      }).save();
      // Clear input field
      this.set('newItem', '');
    },
    destroyItem(food){
      // saves automatically
      food.destroyRecord();
    }
  }
});
