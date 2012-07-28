Demo.Models.Section = Backbone.Model.extend({
       name: 'Section Name',
        url: 'http://localhost' 
});

Demo.Collections.Sections = Backbone.Collection.extend({
       model: Demo.Models.Section
});

Demo.Models.Site = Backbone.Model.extend({
       name: 'Site Name',
        url: 'http://localhost' 
});

Demo.Models.Story = Backbone.Model.extend({
    defaults : {
        headline: 'Headline',
        byline: 'Byline',
        date: 'Today',
        small_image: 'http://localhost',
        large_image: 'http://localhost',
        url: 'http://localhost' 
    }
});

// TO DO: add a collection of stories to the Section model

// TO DO: replace the Item model and Items collection

Demo.Models.Item = Backbone.Model.extend();

Demo.Collections.Items = Backbone.Collection.extend({
	model: Demo.Models.Item
});

