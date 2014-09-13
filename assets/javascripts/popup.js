$(function() {
    $('#btn-stash').click(function() {
        chrome.tabs.query({active: true}, function(tab) {
            if ($.isArray(tab)) {
                tab = tab[0];
            }

            var url = tab.url;
            var title = tab.title;

            var win = chrome.extension.getBackgroundPage();
            var pages = win.localStorage['stash_it'];

            if (!pages) pages = '[]';

            pages = JSON.parse(pages);

            pages.push({
                url: url,
                title: title
            });

            win.localStorage['stash_it'] = JSON.stringify(pages);

            chrome.tabs.remove(tab.id);
        });
    });

    $('#btn-stash-manage').click(function() {
        chrome.tabs.create({
            url: 'manage.html',
            active: true
        });
    });
});
