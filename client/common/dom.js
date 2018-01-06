export function scrollIntoView({ target }) {
  if (target) {
    setTimeout(() => {
      if (target.scrollIntoViewIfNeeded) {
        target.scrollIntoViewIfNeeded()
      } else if (target.scrollIntoView) {
        target.scrollIntoView(false)
      }
    }, 300)
  }
}

export function copy(ele, succCallback, failCallback) {
  if (document.execCommand) {
    ele.focus()
    ele.setSelectionRange(0, ele.value.length)
    document.execCommand('copy', true)
    ele.blur()
    succCallback && succCallback()
  } else {
    failCallback && failCallback()
  }
}
