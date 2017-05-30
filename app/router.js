import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Hey, I'm a comment
// Hey, I'm in the branch!
// Another comment!
Router.map(function() {
  this.route('foods');
  this.route('about');
  this.route('contact');
});

export default Router;
