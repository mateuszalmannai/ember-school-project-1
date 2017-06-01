import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAvailablity(food){
      //Ember.set(food, 'isAvailable', !food.get('isAvailable'));
      food.set('isAvailable', !food.get('isAvailable'));  // Does the same thing, as long as food is an Ember object
      // food.toggleProperty('isAvailable');
      food.save();
    },
    toggleOpen(){
      // 'this' is the context of the component
      // this.set('isOpen', !this.get('isOpen'));
      this.toggleProperty('isOpen'); // use ember method instead to achieve the same thing more succinctly
    }
  }
});
