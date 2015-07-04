import Ember from 'ember';

export default Ember.Mixin.create({

	_scrollToSection: function(selector){
		console.log("Scrolling to ", selector);
		Ember.$('html, body').animate({ 
			scrollTop: Ember.$(selector).offset().top - 130}, 1000
		);
	},
	
	transitionWithScrollHandler: function(obj, selector){
		var self = this;
		Ember.run.schedule('afterRender', self, function () {
 			 obj._scrollToSection(selector);
		});
	}
});
