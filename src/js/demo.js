var Demo = {
	Models:      {},
	Collections: {},
	Views:       {},
	Utils:       {},

	// Called once, at app startup
	init: function () {
		// Set a better title for the topbar
		forge.topbar.setTitle("Huffington Post");

		// Front-page button
		var frontPageButton = forge.tabbar.addButton({
			text: "Home",
			icon: "img/53-house.png",
			index: 0
		}, function (button) {
			button.onPressed.addListener(function () {
				Demo.router.navigate("", true);
			});
			// This is the default button, activate it immediately
			button.setActive();
		});

		// Sections button
		var sectionsButton = forge.tabbar.addButton({
			text: "Sections",
			icon: "img/166-newspaper.png",
			index: 1
		}, function (button) {
			button.onPressed.addListener(function () {
				Demo.router.navigate("sections", true);
			});
		});

		// Search button
		var searchButton = forge.tabbar.addButton({
			text: "Search",
			icon: "img/06-magnify.png",
			index: 2
		}, function (button) {
			button.onPressed.addListener(function () {
				Demo.router.navigate("searchrt", true);
			});
		});

		// Favorites button
		var favoritesButton = forge.tabbar.addButton({
			text: "Favorites",
			icon: "img/28-star.png",
			index: 3
		}, function (button) {
			button.onPressed.addListener(function () {
				Demo.router.navigate("favorites", true);
			});
		});

		// Settings button
		var settingsButton = forge.tabbar.addButton({
			text: "Settings",
			icon: "img/20-gear2.png",
			index: 4
		}, function (button) {
			button.onPressed.addListener(function () {
				Demo.router.navigate("settings", true);
			});
		});

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
			Demo.currPage = 0;
			
			// Set up Backbone
			Demo.router = new Demo.Router();
			Backbone.history.start();
		}
	}
};
