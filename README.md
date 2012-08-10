# Backbone.AdhocView

A simple assistant view of `Backbone.View`.

	var View = Backbone.AdhocView.extend({
		...
		
		_onSize: function() {
			...
		},
		_onPosition: function() {
			...
		},
		_onAlpha: function() {
			...
		},
		_onVisible: function() {
			...
		}
	});
	
	var view = new View();
	
	view
		.on('size', function(view) {
			console.log('size changed');
		})
		.on('position', function(view) {
			console.log('position changed');
		})
		.on('alpha', function(view) {
			console.log('alpha changed');
		})
		.on('visible', function(view) {
			console.log('visible changed');
		});
	
	view
		.size({width:500, height:300}) // size changed
		.position({x:100, y:50}) // position changed
		.alpha(0.5) // alpha changed
		.visible(false); // visible changed
	
	console.log(view.size()); // {width:500, height:300}
	console.log(view.position()); // {x:100, y:500}
	console.log(view.width()); // 500
	console.log(view.x()); // 100
	console.log(view.alpha()); // 0.5
	console.log(view.visible()); // false