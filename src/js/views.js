// A Backbone view you can use which supports transitions
Demo.Views.Page = Backbone.View.extend({
	className: "page",

	initialize: function () {
		this.render();
	},
	show: function () {
		$('.page').css({"position": "absolute"});
		var direction_coefficient = this.options.back? 1 : -1;
		if ($('.page').length) {
			
			var $old = $('.page').not(this.el);
			
			//This fix was hard-won, just doing .css(property, '') doesn't work!
			$old.get(0).style["margin-left"] = ""
			$old.get(0).style["-webkit-transform"] = ""
			
			this.$el.appendTo('body').hide();
			this.$el.show().css({"margin-left": 320 * direction_coefficient});
			this.$el.anim({translate3d: -320 * direction_coefficient +'px,0,0'}, 0.3, 'linear');
			$old.anim({translate3d: -320 * direction_coefficient + 'px,0,0'}, 0.3, 'linear', function() {
				$old.remove();
				$('.page').css({"position": "static"});
			});
		} else {
			this.$el.appendTo('body').hide();
			this.$el.show();
		}
		/* TODO: This is not cross platform. Jquery has .scrollTop(), but zepto does not. Port? */
		window.scrollTo(0, 0);
	}
});


Demo.Views.Index = Demo.Views.Page.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		var that = this;
		this.collection.each(function(feed_item, index){
				if (index % 2 === 1) {
					var new_view = new Demo.Views.Feed({
						model: feed_item,
						odd: true}
					);
				} else {
					var new_view = new Demo.Views.Feed({
						model: feed_item,
						odd: false
					});
				}
				$(that.el).append(new_view.el);
		});
		return this;
	}
});


Demo.Views.Feed = Backbone.View.extend({

	events: Demo.Utils.click_or_tap({
		".feed-even": "expand_item",
		".feed-odd" : "expand_item"
	}),
	
	expand_item: function () {
		Demo.router.navigate("item/" + this.model.cid.split("").slice(1), true);
	},
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		var feed_class = (this.options.odd? "feed-odd" : "feed-even");
		$(this.el).append('<div class="' + feed_class + '">' +
			                        this.model.get("entry_headline") +
						"</div>");
		return this;
	}
});


Demo.Views.Item = Demo.Views.Page.extend({

	events: Demo.Utils.click_or_tap({
		"#back.feed-even": "go_back",
		"#item.feed-even": "expand_item",
		"#item.feed-odd" : "expand_item"
	}),

	expand_item: function () {
		// Open an external URL in a separate view
		forge.tabs.open(this.model.get("entry_url"));
	},

	initialize: function() {
		this.render();
	},

	go_back: function() {
		Demo.router.navigate("", true);
	},
	
	render: function() {
		var author = this.model.get("author_name");
		var author_line = (author ? " by " + author : "");

		$(this.el).append('<div id="back", class="feed-even">Back</div>');
		
		$(this.el).append('<li id="item", class="feed-odd">' +
				this.model.get("entry_headline") +
				'<div class="author">' +
				author_line +
				'</div>' +
				'<div class="date">' +
				this.model.get("entry_extra_first_published_on") +
				'</div>' +
				'<div class="comment_count">' +
				'Comments (' + this.model.get("entry_comment_count") + ')' +
				'</div>' +
				'</li>');
		return this;
	}
});

Demo.Views.Settings = Demo.Views.Page.extend({

	events: Demo.Utils.click_or_tap({
		"#back.feed-even": "go_back",
		"#set1.feed-even": "alert1",
		"#set2.feed-even": "alert2"
	}),

	initialize: function() {
		this.render();
	},

	go_back: function() {
		Demo.router.navigate("", true);
	},
	
	alert1: function() {
		alert("You've selected Setting 1");
	},
	
	alert2: function() {
		alert("You've selected Setting 2");
	},
	
	render: function() {

		$(this.el).append('<div id="back", class="feed-even">Back</div>');
		$(this.el).append('<div id="set1", class="feed-even">Setting 1</div>');
		$(this.el).append('<div id="set2", class="feed-even">Setting 2</div>');
		
		return this;
	}
});

Demo.Views.Sections = Demo.Views.Page.extend({

	events: Demo.Utils.click_or_tap({
		"#back.feed-even": "go_back",
		"#weather.feed-even": "weather",
		"#sports.feed-even": "sports",
		"#errythingelse.feed-even": "errythingelse"
	}),

	initialize: function() {
		this.render();
	},

	go_back: function() {
		Demo.router.navigate("", true);
	},
	
	weather: function() {
		alert("Sunny?");
	},
	
	sports: function() {
		alert("The piggers drove the bat ball down to the basket net. GOAL!");
	},
	
	errythingelse: function() {
		alert("Bruce Wayne is Batman");
	},
	
	render: function() {

		$(this.el).append('<div id="back", class="feed-even">Back</div>');
		$(this.el).append('<div id="weather", class="feed-even">Weather</div>');
		$(this.el).append('<div id="sports", class="feed-even">Sports</div>');
		$(this.el).append('<div id="errythingelse", class="feed-even">Errything Else</div>');
		
		return this;
	}
});

Demo.Views.Search = Demo.Views.Page.extend({

	events: Demo.Utils.click_or_tap({
		"#back.feed-even": "go_back"
	}),

	initialize: function() {
		this.render();
	},

	go_back: function() {
		Demo.router.navigate("", true);
	},
	
	render: function() {

		$(this.el).append('<div id="back", class="feed-even">Back</div>');
		$(this.el).append('<div id="set1", class="feed-even">Search Later</div>');
		
		return this;
	}
});

Demo.Views.Favorites = Demo.Views.Page.extend({

	events: Demo.Utils.click_or_tap({
		"#back.feed-even": "go_back",
		"#fav.feed-even": "fav"
	}),

	initialize: function() {
		this.render();
	},

	go_back: function() {
		Demo.router.navigate("", true);
	},
	
	fav: function() {
		alert("Orange Soda");
	},
	
	render: function() {

		$(this.el).append('<div id="back", class="feed-even">Back</div>');
		$(this.el).append('<div id="fav", class="feed-even">Favorite Thing</div>');
		
		return this;
	}
});
