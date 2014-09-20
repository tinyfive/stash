$ ->
  stash.init()
  render()

  $('#btn-clear').click ->
    stash.clear()

  $(document).on 'click', '.btn-remove', (e) ->
    e.preventDefault()

    btn = $(@)
    page = btn.closest('.item')
    timestamp = page.data('timestamp')

    stash.remove(timestamp)
    page.fadeOut ->
      page.remove()

render = ->
  pages = stash.pages
  pagesEl = $('#pages')

  unless pages.length
    pagesEl.replaceWith('<p>No Pages!</p>')
    return

  tpl = $('#tpl-page-item').html()
  html = ''

  for page in pages
    html += Mark.up tpl, page

  pagesEl.html(html)
