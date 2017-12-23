import BaseRequest from './Base'

let api = BaseRequest('api/')

export default {
  getCommunities: api.__genGet('community'),
  sendEmail: addr => api.__genPost('require_email')({
    email: addr,
  }),
}
