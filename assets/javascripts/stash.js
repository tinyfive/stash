(function() {
  window.stash = {
    init: function(scope) {
      scope || (scope = window);
      this.localStorage = scope.localStorage;
      return this.pages = JSON.parse(this.localStorage['stash_it']);
    },
    save: function() {
      return this.localStorage['stash_it'] = JSON.stringify(this.pages);
    },
    add: function(page) {
      this.pages.push(page);
      return this.save();
    },
    remove: function(timestamp) {
      var index, page, _i, _len, _ref;
      _ref = this.pages;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        page = _ref[index];
        if (page.timestamp === timestamp) {
          this.pages.splice(index, 1);
          break;
        }
      }
      return this.save();
    },
    clear: function() {
      if (!window.confirm('确定要清空暂存的页面吗?')) {
        return;
      }
      this.localStorage.removeItem('stash_it');
      return location.reload();
    },
    reverse: function() {
      this.pages.reverse();
      return this.save();
    },
    format: function() {
      var datetime, page, _i, _len, _ref;
      datetime = (new Date()).getTime();
      _ref = this.pages;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        if (!page.timestamp) {
          page.timestamp = ++datetime;
        }
      }
      return this.save();
    }
  };

}).call(this);
