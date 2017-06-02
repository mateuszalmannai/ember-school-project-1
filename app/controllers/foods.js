import Ember from "ember";

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  newItem: null,
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
        // call save() to propagate to the server
      }).save();
      // Clear input field
      this.set('newItem', '');
    },
    toggleAvailablity(food){
      //Ember.set(food, 'isAvailable', !food.get('isAvailable'));
      food.set('isAvailable', !food.get('isAvailable'));  // Does the same thing, as long as food is an Ember object
      // food.toggleProperty('isAvailable');
      food.save();
    }
  }
});
