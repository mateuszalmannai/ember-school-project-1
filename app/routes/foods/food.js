import Ember from 'ember';

export default Ember.Route.extend({
  // this is what's there by default if you don't define the model method on the route
  // Hooray for good defaults! Convention over Configuration FTW!
  model(params){
    return this.store.findRecord('food', params.food_id);
  }
});
