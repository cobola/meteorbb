AutoForm.addInputType("meteorbb-richeditor", {
    template: "RichEditor"
});

Template.RichEditor.helpers({
    atts: function addFormControlAtts() {
        var atts = _.clone(this.atts);
        // Add bootstrap class
        atts = AutoForm.Utility.addClass(atts, "form-control");
        atts = AutoForm.Utility.addClass(atts, "richeditor");

        return atts;
    },
    value:function getvalue(){

      return Template.currentData().value;
    }
});

