(function() {
  var AdhocView, Backbone,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

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
      this._x = 0;
      this._y = 0;
      this._width = 0;
      this._height = 0;
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
          x: this._x,
          y: this._y
        };
      }
    };

    AdhocView.prototype.x = function(x) {
      if (x !== void 0) {
        return this.position({
          x: x
        });
      } else {
        return this._x;
      }
    };

    AdhocView.prototype.y = function(y) {
      if (y !== void 0) {
        return this.position({
          y: y
        });
      } else {
        return this._y;
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
          width: this._width,
          height: this._height
        };
      }
    };

    AdhocView.prototype.width = function(width) {
      if (width !== void 0) {
        return this.size({
          width: width
        });
      } else {
        return this._width;
      }
    };

    AdhocView.prototype.height = function(height) {
      if (height !== void 0) {
        return this.size({
          height: height
        });
      } else {
        return this._height;
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

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = AdhocView;
  } else if (this.Backbone != null) {
    this.Backbone.AdhocView = AdhocView;
  }

}).call(this);
