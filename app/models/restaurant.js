import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  foods: DS.hasMany('food') // name of model is optional, if name of attribute is plural of model
});
