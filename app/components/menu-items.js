import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		scrollTo: function(item, anchor){
			var paramsObj = {route: item, anchor: anchor};
			this.sendAction('action',paramsObj);
		}
	}
});
