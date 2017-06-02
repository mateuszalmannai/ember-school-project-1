import Ember from "ember";

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleOpen(){
      // 'this' is the context of the component
      // this.set('isOpen', !this.get('isOpen'));
      this.toggleProperty('isOpen'); // use ember method instead to achieve the same thing more succinctly
    }
  }
});
