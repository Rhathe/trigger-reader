Demo.Router = Backbone.Router.extend({

	routes: {
        "" : "index",         // entry point: no hash fragment or #
		"item/:item_id":"item",// #item/id
		"sections" : "sections",
		"searchrt" : "searchrt",
		"favorites" : "favorites",
		"settings" : "settings"
	},

	// main and initial route
	index: function() {
		// we will show a page of all our recent tweets
		var index = new Demo.Views.Index({
				collection: Demo.items,
				back      : false
			});
		// .show() is specific to our Page view class
		Demo.currPage = 0;
		index.show();
	},
	
	// for viewing a specific tweet
	item: function(item_id) {
		var item = new Demo.Models.Item(Demo.items.models[item_id]);
		var item_view = new Demo.Views.Item({
			model: item,
			back : true
		});
		Demo.currPage = 0;
		item_view.show();
	},
	
	// sections route
	sections: function() { 
		var sections = new Demo.Views.Sections({
			back : true
		});
		sections.options.back = Demo.currPage < 1 ? true : false;
		Demo.currPage = 1;
		sections.show();
	},
	
	// search route
	searchrt: function() {
		var searchrt = new Demo.Views.Search({
			back : true
		});
		searchrt.options.back = Demo.currPage < 2 ? true : false;
		Demo.currPage = 2;
		searchrt.show();
	},
	
	// favorites route
	favorites: function() {
		var favorites = new Demo.Views.Favorites({
			back : true
		});
		favorites.options.back = Demo.currPage < 3 ? true : false;
		Demo.currPage = 3;
		favorites.show();
	},
	
	// settings route
	settings: function() {
		var settings = new Demo.Views.Settings({
			back : true
		});
		settings.options.back = Demo.currPage < 4 ? true : false;
		Demo.currPage = 4;
		settings.show();
	}
});
