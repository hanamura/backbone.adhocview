if module?.exports?
	Backbone = require 'backbone'
else if @Backbone
	Backbone = @Backbone
else
	throw new Error 'Backbone not found'

class AdhocView extends Backbone.View
	# init
	initialize: ->
		@_x = 0
		@_y = 0
		@_width = 0
		@_height = 0
		@_alpha = 1
		@_visible = true

		super arguments

	# position
	position: (position) ->
		if position != undefined
			some = false
			if position.x
				@_x = position.x
				some = true
			if position.y
				@_y = position.y
				some = true
			if some
				@_inPosition()
			@
		else
			x: @_x, y: @_y

	x: (x) ->
		if x != undefined then @position x:x else @_x

	y: (y) ->
		if y != undefined then @position y:y else @_y

	_inPosition: ->
		@_onPosition()
		@trigger 'position', @

	_onPosition: ->
		# override
		@$el.css
			left: @x()
			top: @y()

	# size
	size: (size) ->
		if size != undefined
			some = false
			if size.width
				@_width = size.width
				some = true
			if size.height
				@_height = size.height
				some = true
			if some
				@_inSize()
			@
		else
			width: @_width, height: @_height

	width: (width) ->
		if width != undefined then @size width:width else @_width

	height: (height) ->
		if height != undefined then @size height:height else @_height

	_inSize: ->
		@_onSize()
		@trigger 'size', @

	_onSize: ->
		# override
		@$el.css
			width: @width()
			height: @height()

	# alpha
	alpha: (alpha) ->
		if alpha != undefined
			@_alpha = alpha
			@_inAlpha()
			@
		else
			@_alpha

	_inAlpha: () ->
		@_onAlpha()
		@trigger 'alpha', @

	_onAlpha: () ->
		# override
		@$el.css
			opacity: @alpha()

	# visible
	visible: (visible) ->
		if visible != undefined
			@_visible = visible
			@_inVisible()
			@
		else
			@_visible

	_inVisible: () ->
		@_onVisible()
		@trigger 'visible', @

	_onVisible: () ->
		# override
		if @visible() then @$el.show() else @$el.hide()



class ButtonView extends AdhocView
	# init
	initialize: ->
		@_data = null
		@_selected = false
		@_enabled = false
		@_hover = false

		@on 'mouseenter', =>
			@_hover = true
			@_inHover()
		@on 'mouseleave', =>
			@_hover = false
			@_inHover()

		super arguments...

	# data
	data: (data) ->
		if data != undefined
			if @_data != data
				@_data = data
				@_inData()
			@
		else
			@_data

	_inData: ->
		@_onData()
		@trigger 'data', @

	_onData: ->
		# override

	# selected
	selected: (selected) ->
		if selected != undefined
			if @_selected != selected
				@_selected = selected
				@_inSelected()
			@
		else
			@_selected

	_inSelected: ->
		@_onSelected()
		@trigger 'selected', @

	_onSelected: ->
		# override
		if @selected() then @$el.addClass 'selected' else @$el.removeClass 'selected'

	# enabled
	enabled: (enabled) ->
		if enabled != undefined
			if @_enabled != enabled
				@_enabled = enabled
				@_inEnabled()
			@
		else
			@_enabled

	_inEnabled: ->
		@_onEnabled()
		@trigger 'enabled', @

	_onEnabled: ->
		# override
		if @enabled() then @$el.addClass 'enabled' else @$el.removeClass 'enabled'

	# hover
	hover: -> @_hover

	_inHover: ->
		@_onHover()
		@trigger 'hover', @

	_onHover: ->
		# override



# export
if module?.exports?
	module.exports =
		AdhocView: AdhocView
		ButtonView: ButtonView
else if @Backbone?
	@Backbone.AdhocView = AdhocView
	@Backbone.ButtonView = ButtonView