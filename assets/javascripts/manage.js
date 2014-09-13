$(function() {
    var pages = localStorage['stash_it'],
        tableEl = $('.table-pages');

    if (!pages) {
        // TODO : handle empty
        tableEl.replaceWith('<p>No Pages!</p>');
        return
    }

    pages = JSON.parse(pages);

    var html = '';

    $.each(pages, function(idx, page) {
        // TODO : use a template engine is better
        html += '<tr><td><a href="' + page.url + '">' + page.title + '</a></td></tr>';
    });

    tableEl.html(html);

    $('#btn-clear').click(function() {
        if (window.confirm('确定要清空暂存的页面吗?')) {
            localStorage.removeItem('stash_it');
            location.reload();
        }
    });
});
