var Demo = {
	Models:      {},
	Collections: {},
	Views:       {},
	Utils:       {},

	// Called once, at app startup
	init: function () {
		// Grab the HuffPo top news feed
		forge.request.ajax({
			url: "http://www.huffingtonpost.com/mobileweb/homepage_top_news.php?edition=us",
			dataType: "json",
			success: showIndex
		});

		// Callback executed when we have the feed
		function showIndex(data) {
			// Save away initial data, stripping off the 'entries' element in the HuffPo feed
			Demo.items = new Demo.Collections.Items(data['entries']);

                        // Now traverse the collection
		        //Demo.items.each(function(feed_item, index){

			// Set up Backbone
			Demo.router = new Demo.Router();
			Backbone.history.start();
		}
	}
};
