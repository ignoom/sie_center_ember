import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
		buttonSubmitClick: function(){
			console.log('click on button');
      //find parent container
      var parent_elem = this.findElementInParentElement();
      this.toggleEditable(parent_elem);
      var text = this.get('text');
      console.log(text);
      this.submitChange(text);
		},
    buttonCancelClick: function(){
      var parent_elem = this.findElementInParentElement();
      this.toggleEditable(parent_elem);
      console.log('click cancelar');
    },
    textClick: function() {
      var parent_elem = this.findElementInParentElement();
      var text_section = Ember.$(parent_elem).find('.modifiable-text');

      if(!text_section.hasClass('hide')){
        this.toggleEditable(parent_elem);     
      }
    }
  },
  toggleEditable: function(selector){
    console.log('toggleEditable');
    var editor_container = Ember.$(selector).find('.editor-container');
    var text_section = Ember.$(selector).find('.modifiable-text');
    editor_container.toggleClass('hide');
    text_section.toggleClass('hide');
  },
  submitChange: function(text){
    console.log('submiting text change');
    this.sendAction('editable', text);
  },
  isHeader1: function(){
    return this.get('header') === 'h1';
  }.property('header'),
  isHeader2: function() {
    return this.get('header') === 'h2';
  }.property('header'),
  isHeader3: function(){
    return this.get('header') === 'h3';
  }.property('header'),
  isHeader4: function(){
    return this.get('header') === 'h4';
  }.property('header'),
  isHeader5: function(){
    return this.get('header') === 'h5';
  }.property('header')
});
