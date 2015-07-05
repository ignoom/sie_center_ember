import Ember from 'ember';
import AppMixin from 'new-app/mixins/app-mixin';

export default Ember.Route.extend(AppMixin,{
	actions: {
		scrollAndRedirect: function(params){
			var self = this;
			this.transitionTo(params.route)
				.then(this.transitionWithScrollHandler(self, params.anchor)); 
		}
	},
	model: function(){
		var quienes_somos_obj = {
			title: "Quiénes somos",
			sections: [	{subtitle: "Mision", text: "Texto Mision", icon:""},
						{subtitle: "Socios", text: "Texto Socios", icon:""},
						{subtitle: "Vision", text: "Texto Vision", icon:""}]
		};

		var info_obj = {
			title: "",
			sections: [ {subtitle: "Valores", text: "", bullets: ["valor1", "valor2", "valor3"]},
						{subtitle: "Presencia Internacional", text:"", img: "america-latina.png"},
						{subtitle: "Clientes", text:"", img: "logos_clientes.png"}]
		};

		var como_ayudar_obj = {
			title: "¿Como podemos ayudarle?",
			sections: [ {subtitle: "¿Desea mejorar productividad?", text: "La solucion es"},
						{subtitle: "¿Desea disminuir errores", text: "La solucion es"},
						{subtitle: "¿Desea entregar los proyectos a tiempo", text: "La solucion es"}],
			footer: [ "Somos LA solucion" ]
		};

		var obj = {	quienes_somos: quienes_somos_obj,
					info: info_obj,
					como_ayudar: como_ayudar_obj};

		return obj;
	}
});