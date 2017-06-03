import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model.food').save();
      this.transitionToRoute('foods.food', this.get('model.food.id'));
    },
    selectRestaurant(selection, component){
      let food = this.get('model.food');
      food.get('restaurant').then((restaurant)=>{
        food.set('restaurant', selection); // 1. save food
        selection.save();                  // 2. save new restaurant
        restaurant.save();                 // 3. save old restaurant
      });
    }
  }
});
