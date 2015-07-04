import Ember from 'ember';
import AppMixin from 'new-app/mixins/app-mixin';

export default Ember.Route.extend(AppMixin,{
	model: function(){
		return {title: "oso"};
	},
	renderTemplate: function() {
    	this.render('post');
  	},
	actions: {
		scrollAndRedirect: function(params){
			var self = this;
			this.transitionTo(params.route)
				.then(this.transitionWithScrollHandler(self, params.anchor)); 
		}
	}
});