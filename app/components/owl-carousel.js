import Ember from 'ember';

export default Ember.Component.extend({
	
	_initializeCarousel: function(){
		//console.log("Carrousel Initialized");
		this.$().owlCarousel();
	}.on('didInsertElement')

});
