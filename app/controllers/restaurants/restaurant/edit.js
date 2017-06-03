import Ember from 'ember';

export default Ember.Controller.extend({
  // take the foods in the model and subtract away the foods that are at the restaurant already
  otherFoods: Ember.computed.setDiff('model.foods', 'model.restaurant.foods'),
  actions: {
    save(){
      this.get('model.restaurant').save();
      this.transitionToRoute('restaurants.restaurant', this.get('model.restaurant.id'));
    },
    removeFood(food){
      // specific to firebase
      let restaurant = this.get('model.restaurant');
      restaurant.get('foods').removeObject(food);
      // specific to firebase: the food which belongs to a restaurant gets saved first
      food.save().then(()=>{
        // then, once the promise returns, the restaurant is saved
        restaurant.save();
      });
    },
    addFood(food){
      // specific to firebase
      let restaurant = this.get('model.restaurant');
      restaurant.get('foods').addObject(food);
      // specific to firebase: the food which belongs to a restaurant gets saved first
      food.save().then(()=>{
        // then, once the promise returns, the restaurant is saved
        restaurant.save();
      });
    }
  }
});
