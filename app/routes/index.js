import Ember from 'ember';
import AppMixin from 'new-app/mixins/app-mixin';

export default Ember.Route.extend(AppMixin,{
	actions: {
		scrollAndRedirect: function(params){
			var self = this;
			
			if (params.route !== 'index'){
				this.transitionTo(params.route)
				.then(this.transitionWithScrollHandler(self, params.anchor));
			}else{
				this._scrollToSection(params.anchor);	
			}
			
		}
	}, 
	model: function(){
		var servicios_obj = {
			title: "Servicios",
			sections: [	{subtitle: "Sub1", text: "Section1", icon: "fa sie-icon sie-consultoria-icon"}, 
						{subtitle: "Sub2", text: "Section2", icon: "fa sie-icon sie-capacitacion-icon"}, 
						{subtitle: "Sub3", text: "Section3", icon: "fa sie-icon sie-evaluacion-icon"}]
		};

		var eventos_obj = {
			title: "Eventos",
			sections: [ {subtitle: "Congresos", text:"Seccion Congresos", icon: "mdi-maps-local-library"},
						{subtitle: "Webinars", text:"Contenido Webinars", icon: "mdi-device-devices"}]
		};

		var agenda_obj = {
			title: "Agenda",
			sections: []
		};

		var contacto_obj = {
			title: "Contacto",
			subtitle: "Oficinas",
			sections: [	{ subtitle: "", text: "Domicilio1", icon: "large mdi-maps-pin-drop" },
						{ subtitle: "", text: "Domicilio2", icon: "large mdi-maps-pin-drop" },
						{ subtitle: "", text: "Domicilio3", icon: "large mdi-maps-pin-drop" },
						{ subtitle: "", text: "Domicilio4", icon: "large mdi-maps-pin-drop" } ],
			details: [	{ text: "1234-542-432", icon: "small mdi-communication-call" },
						{ text: "correo@siecenter.mx", icon: "small mdi-communication-email" }]
		};

		var obj = { servicios: servicios_obj, 
					agenda:    agenda_obj, 
					eventos:   eventos_obj, 
					contacto:  contacto_obj
				};
		return  obj;
	}
});
