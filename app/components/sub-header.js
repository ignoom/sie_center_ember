import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    scrollAndRedirect: function(params){
      this.sendAction('action', params);
    } 
  },
  
	
	didInsertElement() {
    this._super(...arguments);
    //TODO: is this scheduling necessary?
    Ember.run.scheduleOnce('afterRender', this, this._setupNavbar);
  },
  
	_setupNavbar() {
    	if(Ember.typeOf(Ember.$('.button-collapse').sideNav) === 'function'){
      		this.$('.button-collapse').sideNav({
        		closeOnClick: true
      		});
    	}
  	}
});
