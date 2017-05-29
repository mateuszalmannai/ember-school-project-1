import Ember from "ember";

export default Ember.Controller.extend({
  foods: [
    {name: 'Tacos', isAvailable: true},
    {name: 'Salad', isAvailable: true},
    {name: 'Pizza', isAvailable: false},
    {name: 'Vegetables', isAvailable: true},
    {name: 'Fruit Smoothies', isAvailable: false}
  ],
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1}
});
