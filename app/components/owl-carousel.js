import Ember from 'ember';

export default Ember.Component.extend({
	
	_initializeCarousel: function(){
		//console.log("Carrousel Initialized");
		this.$().owlCarousel({
			items: 1,
			singleItem: true,
			autoPlay: true,
			autoHeight: true,
			stopOnHover: true
		});
	}.on('didInsertElement')

});
