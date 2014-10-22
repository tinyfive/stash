window.stash =
  init: (scope) ->
    scope or= window
    @localStorage = scope.localStorage
    @pages = JSON.parse @localStorage['stash_it']

  save: ->
    chrome.browserAction.setBadgeText
      text: @pages.length.toString()
    @localStorage['stash_it'] = JSON.stringify @pages

  add: (page) ->
    @pages.push page
    @save()

  remove: (timestamp) ->
    for page, index in @pages
      if page.timestamp is timestamp
        @pages.splice(index, 1)
        break
    @save()

  clear: ->
    return unless window.confirm('确定要清空暂存的页面吗?')
    @localStorage.removeItem('stash_it')
    location.reload()

  reverse: ->
    @pages.reverse()
    @save()

  format: ->
    datetime = (new Date()).getTime()

    for page in @pages
      unless page.timestamp
        page.timestamp = ++datetime

    @save()
