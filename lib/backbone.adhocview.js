(function() {
  var AdhocView, Backbone, ButtonView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    Backbone = require('backbone');
  } else if (this.Backbone) {
    Backbone = this.Backbone;
  } else {
    throw new Error('Backbone not found');
  }

  AdhocView = (function(_super) {

    __extends(AdhocView, _super);

    function AdhocView() {
      return AdhocView.__super__.constructor.apply(this, arguments);
    }

    AdhocView.prototype.initialize = function() {
      this._x = NaN;
      this._y = NaN;
      this._width = NaN;
      this._height = NaN;
      this._alpha = 1;
      this._visible = true;
      return AdhocView.__super__.initialize.call(this, arguments);
    };

    AdhocView.prototype.position = function(position) {
      var some;
      if (position !== void 0) {
        some = false;
        if (position.x) {
          this._x = position.x;
          some = true;
        }
        if (position.y) {
          this._y = position.y;
          some = true;
        }
        if (some) {
          this._inPosition();
        }
        return this;
      } else {
        return {
          x: this._x || 0,
          y: this._y || 0
        };
      }
    };

    AdhocView.prototype.x = function(x) {
      if (x !== void 0) {
        return this.position({
          x: x
        });
      } else {
        return this._x || 0;
      }
    };

    AdhocView.prototype.y = function(y) {
      if (y !== void 0) {
        return this.position({
          y: y
        });
      } else {
        return this._y || 0;
      }
    };

    AdhocView.prototype._inPosition = function() {
      this._onPosition();
      return this.trigger('position', this);
    };

    AdhocView.prototype._onPosition = function() {
      return this.$el.css({
        left: this.x(),
        top: this.y()
      });
    };

    AdhocView.prototype.size = function(size) {
      var some;
      if (size !== void 0) {
        some = false;
        if (size.width) {
          this._width = size.width;
          some = true;
        }
        if (size.height) {
          this._height = size.height;
          some = true;
        }
        if (some) {
          this._inSize();
        }
        return this;
      } else {
        return {
          width: this._width || 0,
          height: this._height || 0
        };
      }
    };

    AdhocView.prototype.width = function(width) {
      if (width !== void 0) {
        return this.size({
          width: width
        });
      } else {
        return this._width || 0;
      }
    };

    AdhocView.prototype.height = function(height) {
      if (height !== void 0) {
        return this.size({
          height: height
        });
      } else {
        return this._height || 0;
      }
    };

    AdhocView.prototype._inSize = function() {
      this._onSize();
      return this.trigger('size', this);
    };

    AdhocView.prototype._onSize = function() {
      return this.$el.css({
        width: this.width(),
        height: this.height()
      });
    };

    AdhocView.prototype.alpha = function(alpha) {
      if (alpha !== void 0) {
        this._alpha = alpha;
        this._inAlpha();
        return this;
      } else {
        return this._alpha;
      }
    };

    AdhocView.prototype._inAlpha = function() {
      this._onAlpha();
      return this.trigger('alpha', this);
    };

    AdhocView.prototype._onAlpha = function() {
      return this.$el.css({
        opacity: this.alpha()
      });
    };

    AdhocView.prototype.visible = function(visible) {
      if (visible !== void 0) {
        this._visible = visible;
        this._inVisible();
        return this;
      } else {
        return this._visible;
      }
    };

    AdhocView.prototype._inVisible = function() {
      this._onVisible();
      return this.trigger('visible', this);
    };

    AdhocView.prototype._onVisible = function() {
      if (this.visible()) {
        return this.$el.show();
      } else {
        return this.$el.hide();
      }
    };

    return AdhocView;

  })(Backbone.View);

  ButtonView = (function(_super) {

    __extends(ButtonView, _super);

    function ButtonView() {
      this._onClick = __bind(this._onClick, this);

      this._onMouseLeave = __bind(this._onMouseLeave, this);

      this._onMouseEnter = __bind(this._onMouseEnter, this);
      return ButtonView.__super__.constructor.apply(this, arguments);
    }

    ButtonView.prototype.initialize = function() {
      this._data = null;
      this._selected = false;
      this._enabled = false;
      this._hover = false;
      this.$el.on('mouseenter', this._onMouseEnter).on('mouseleave', this._onMouseLeave).on('click', this._onClick);
      return ButtonView.__super__.initialize.apply(this, arguments);
    };

    ButtonView.prototype.data = function(data) {
      if (data !== void 0) {
        if (this._data !== data) {
          this._data = data;
          this._inData();
        }
        return this;
      } else {
        return this._data;
      }
    };

    ButtonView.prototype._inData = function() {
      this._onData();
      return this.trigger('data', this);
    };

    ButtonView.prototype._onData = function() {};

    ButtonView.prototype.selected = function(selected) {
      if (selected !== void 0) {
        if (this._selected !== selected) {
          this._selected = selected;
          this._inSelected();
        }
        return this;
      } else {
        return this._selected;
      }
    };

    ButtonView.prototype._inSelected = function() {
      this._onSelected();
      return this.trigger('selected', this);
    };

    ButtonView.prototype._onSelected = function() {
      if (this.selected()) {
        return this.$el.addClass('selected');
      } else {
        return this.$el.removeClass('selected');
      }
    };

    ButtonView.prototype.enabled = function(enabled) {
      if (enabled !== void 0) {
        if (this._enabled !== enabled) {
          this._enabled = enabled;
          this._inEnabled();
        }
        return this;
      } else {
        return this._enabled;
      }
    };

    ButtonView.prototype._inEnabled = function() {
      this._onEnabled();
      return this.trigger('enabled', this);
    };

    ButtonView.prototype._onEnabled = function() {
      if (this.enabled()) {
        return this.$el.addClass('enabled');
      } else {
        return this.$el.removeClass('enabled');
      }
    };

    ButtonView.prototype.hover = function() {
      return this._hover;
    };

    ButtonView.prototype._onMouseEnter = function() {
      this._hover = true;
      return this._inHover();
    };

    ButtonView.prototype._onMouseLeave = function() {
      this._hover = false;
      return this._inHover();
    };

    ButtonView.prototype._inHover = function() {
      this._onHover();
      return this.trigger('hover', this);
    };

    ButtonView.prototype._onHover = function() {};

    ButtonView.prototype._onClick = function(e) {
      e.preventDefault();
      return this.trigger('click', this);
    };

    return ButtonView;

  })(AdhocView);

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = {
      AdhocView: AdhocView,
      ButtonView: ButtonView
    };
  } else if (this.Backbone != null) {
    this.Backbone.AdhocView = AdhocView;
    this.Backbone.ButtonView = ButtonView;
  }

}).call(this);
