(function() {
  $(function() {
    $('#btn-stash').click(function() {
      return chrome.tabs.query({
        active: true
      }, function(tab) {
        var win;
        if ($.isArray(tab)) {
          tab = tab[0];
        }
        win = chrome.extension.getBackgroundPage();
        stash.init(win);
        stash.add({
          url: tab.url,
          title: tab.title,
          favicon: tab.favIconUrl,
          timestamp: (new Date()).getTime()
        });
        return chrome.tabs.remove(tab.id);
      });
    });
    return $('#btn-stash-manage').click(function() {
      return chrome.tabs.create({
        url: 'manage.html',
        active: true
      });
    });
  });

}).call(this);
