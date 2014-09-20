(function() {
  var render;

  $(function() {
    stash.init();
    render();
    $('#btn-clear').click(function() {
      return stash.clear();
    });
    return $(document).on('click', '.btn-remove', function(e) {
      var btn, page, timestamp;
      e.preventDefault();
      btn = $(this);
      page = btn.closest('.item');
      timestamp = page.data('timestamp');
      stash.remove(timestamp);
      return page.fadeOut(function() {
        return page.remove();
      });
    });
  });

  render = function() {
    var html, page, pages, pagesEl, tpl, _i, _len;
    pages = stash.pages;
    pagesEl = $('#pages');
    if (!pages.length) {
      pagesEl.replaceWith('<p>No Pages!</p>');
      return;
    }
    tpl = $('#tpl-page-item').html();
    html = '';
    for (_i = 0, _len = pages.length; _i < _len; _i++) {
      page = pages[_i];
      html += Mark.up(tpl, page);
    }
    return pagesEl.html(html);
  };

}).call(this);
