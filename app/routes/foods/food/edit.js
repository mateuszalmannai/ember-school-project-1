import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // RSVP.hash takes the two promises and puts them on a hash of promises
    // Then we can treat this just like it's one promise
    // We can call .then, .catch, .finally on this hash
    // This also means that model knows how to handle it
    return Ember.RSVP.hash({
      food: this.store.findRecord('food', params.food_id),
      restaurants: this.store.findAll('restaurant')
    });
  }
});
