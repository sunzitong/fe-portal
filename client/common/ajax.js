import fetch from 'isomorphic-fetch'

import {
  concatUrl,
} from './urlHelper'

const baseDataPath = `${window.__INIT_STATE.apiServer}/`

const execFetch = (method, _url, data) => {
  let isGet = method === 'GET'
  let url = isGet
    ? concatUrl(`${baseDataPath}${_url}`, data) : `${baseDataPath}${_url}`

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'x-access-token': Global.token,
    },
    body: isGet ? undefined : JSON.stringify(data),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.code === 0) {
        return Object.assign({
          __serverTime: res.datetime,
        }, res.data)
      } else {
        throw new Error(res.msg)
      }
    })
}

export const post = (url, data) => execFetch('POST', url, data)
export const get = (url, data) => execFetch('GET', url, data)
