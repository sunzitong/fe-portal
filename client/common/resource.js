export const downloadWhitePaper = () => {
  let local = window.localStorage.getItem('__locale')
  if (local === 'zh') {
    window.open(`${window.location.origin}/docs/CYBEREITS_White_Paper_v1.3.0.pdf`, 'blank')
  } else {
    window.open(`${window.location.origin}/docs/CYBEREITS_White_Paper_EN_v1.2.0.pdf`, 'blank')
  }
}

export const downloadTerm = () => {
  window.open(`${window.location.origin}/docs/CYBEREITS_Term_v1.0.1.pdf`, 'blank')
}

export const downloadPPT = () => {
  window.open(`${window.location.origin}/docs/CYBEREITS_PPT_v1.2.0.pdf`, 'blank')
}
