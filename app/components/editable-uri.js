import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['uri:href'],
  	uri: "/",
  	_click_handler: function(){
  		// TODO click handler, check if user wants to edit or go to uri
  		// TODO prevent default
  		console.log('Clicked element');
  		console.log(Ember.$(this));
  		var uri_t = this.get('uri');
  		console.log(uri_t);
  		//console.log(uri);
  		alert();
  		return false;
  	}.on('click')
});
