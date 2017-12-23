import {
  post,
  get,
} from '../common/ajax'

const requestCreator =
  (httpMethod, baseUrl, subPath) => data =>
    httpMethod.call(null, `${baseUrl}${subPath}`, data)

export default baseUrl => ({
  __genGet: subPath => requestCreator(get, baseUrl, subPath),
  __genPost: subPath => requestCreator(post, baseUrl, subPath),
})
