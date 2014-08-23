;(function (window, document) {
  "use strict";

  function TitleMarquee(options) {
    options = options || {};
    this.displayText = options.displayText || this.defaults.displayText;
    this.displaySpeed = options.displaySpeed || this.defaults.displaySpeed;
    this.spaceBetween = options.spaceBetween || this.defaults.spaceBetween;
    this.separator = options.separator || this.defaults.separator;
    this.direction = options.direction || this.defaults.direction;

    //where we are in the text
    this._currentPosition = 0;

    this._currentInterval = null;
    this._isRunning = false;
  }

  TitleMarquee.prototype = {
    defaults: {
      displayText: 'FOOBAR',
      displaySpeed: 500,
      spaceBetween: 5,
      separator: '~',
      direction: 'rtl' //right to left
    },

    start: function() {
      var self = this;
      var spacing = new Array(this.spaceBetween + 1).join(this.separator);
      var paddedString = this.displayText + spacing;

      var textLength = paddedString.length;
      this._currentInterval = setInterval(function() {
        //wrap around
        var relativePosition = self._currentPosition % textLength;

        switch (self.direction) {
          case 'rtl':
            var newLeft = paddedString.substring(relativePosition);
            var newRight = paddedString.substring(0, relativePosition);
            document.title = newLeft + newRight;
            break;
          case 'ltr':
            var newLeft = paddedString.substring(textLength - relativePosition)
            var newRight = paddedString.substring(0, textLength - relativePosition)
            document.title = newLeft + newRight;
            break;
        }

        //can get very large
        ++self._currentPosition;
      }, this.displaySpeed);

      this._isRunning = true;
    },

    stop: function() {
      clearInterval(this._currentInterval);
      this._isRunning = false;
    },

    clear: function() {
      document.title = "";
      this._currentPosition = 0;
      this._currentPosition = null;
    },

    configure: function(options) {
      options = options || {};
      this.displayText = options.displayText || this.displayText;
      this.displaySpeed = options.displaySpeed || this.displaySpeed;
      this.spaceBetween = options.spaceBetween || this.spaceBetween;
      this.separator = options.separator || this.separator;
      this.direction = options.direction || this.direction;

      //make the change seem seemless
      if (this._isRunning) {
        this.stop();
        this.start();
      }
    }
  };

  window.TitleMarquee = TitleMarquee || {};
})(window, document);
