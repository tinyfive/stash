$ ->
  $('#btn-stash').click ->
    chrome.tabs.query {active: true}, (tab) ->
      if $.isArray(tab)
        tab = tab[0]

      win = chrome.extension.getBackgroundPage()
      stash.init(win)

      stash.add
        url: tab.url
        title: tab.title
        favicon: tab.favIconUrl
        timestamp: (new Date()).getTime()

      chrome.tabs.remove(tab.id)

  $('#btn-stash-manage').click ->
    chrome.tabs.create
      url: 'manage.html'
      active: true
