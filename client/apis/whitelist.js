import BaseRequest from './Base'

let api = BaseRequest('api/')

export default {
  getCommunities: api.__genGet('community'),
  sendEmail: addr => api.__genPost('require_email')({
    email: addr,
  }),
  submit: ({ email, checkcode, name, idno, mobile, community_id, ethcount, ethaddress, wechat }) => api.__genPost('order')({
    wechat,
    community_id,
    name,
    idno,
    mobile,
    email,
    checkcode,
    ethcount,
    ethaddress,
  }),
  getCheckTokenAddr: addr => api.__genGet(`address/${addr}`),
}
