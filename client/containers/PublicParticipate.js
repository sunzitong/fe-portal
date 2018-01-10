import React from 'react'
import { connect } from 'react-redux'

import { toast } from '../actions/toast'
import { alert } from '../actions/dialog'

import Icon from '../components/Icon'
import { HorizontalTitleLogo } from '../components/TitleLogo'
import Loading from '../components/Loading'

import whitelistApis from '../apis/whitelist'

import { copy } from '../common/dom'

const {
  officialEmail,
} = window.__INIT_STATE

const Notice = ({ text, ...rest }) => (
  <span {...rest} className="fore-blue bold">{text}</span>
)

const Panel = ({ text, ...rest }) => (
  <div className="text-center fore-black m-b-10" {...rest}>{text}</div>
)

const Paragraph = ({ children, className, style = {}, ...rest }) => (
  <p className={`small w-80 fore-gray m-b-10 ${className || ''}`} {...rest} style={Object.assign({ lineHeight: '1.2rem' }, style)}>
    {children}
  </p>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = { toast, alert }

const QRCode = () => (
  <Icon logo="qrcode" style={{ width: '8rem', height: '8rem', margin: '20px auto' }} />
)

@connect(mapStateToProps, mapDispatchToProps)
export default class Participate extends React.Component {

  constructor(props) {
    super(props)

    let token = this.props.match.params.token

    this.state = {
      valid: !!token,
      token: token,
      scale: 0,
      limit: 0,
      lock: 0,
      address: '',
      loaded: false,
      username: '',
      idno: '',
    }
  }

  componentDidMount() {
    whitelistApis
      .getCheckTokenAddr(this.state.token)()
      .then(({ __serverTime, address, min, scale, lock, deadline, name, idl4 }) => {
        let deadlineDate = new Date(deadline.replace(/-/g, '/'))
        if (deadlineDate - new Date(__serverTime.replace(/-/g, '/')) > 0) {
          this.setState({
            address,
            limit: min,
            username: name,
            idno: idl4,
            scale,
            lock,
            loaded: true,
          })
          window
            .jQuery('#countdown')
            .countdown({
              image: '/images/digits.png',
              endTime: deadlineDate,
              timerEnd: () => {
                this.setState({
                  valid: false,
                })
              },
            })
        } else {
          this.setState({
            valid: false,
          })
        }
      })
      .catch((ex) => {
        this.props.alert({
          title: '错误',
          msg: ex.message,
        })
        this.setState({
          valid: false,
        })
      })
  }

  render() {
    return (
      this.state.valid
        ? <div className="container form-container fore-blue">
          <HorizontalTitleLogo style={{ height: '3rem', width: '8rem', margin: '.6rem .6rem' }} />
          <h2 className="text-center" style={{ margin: '0 0 1.4rem 0' }}>CRE 公售活动</h2>
          {
            this.state.loaded
              ? <div>
                <Paragraph className="dis-flex">
                  <div style={{ lineHeight: '1.2rem', fontSize: '1rem' }}>参投人 : <Notice text={this.state.username} /></div>
                  <div style={{ lineHeight: '1.2rem', fontSize: '1rem' }}>身份证后四位 : <Notice text={this.state.idno} /></div>
                </Paragraph>
                <h3 className="text-center">投资须知</h3>
                <ol className="small fore-gray" style={{ padding: '0 2.5rem' }}>
                  <li style={{ listStyleType: 'decimal', margin: '.5rem 0' }}>此次投资的参与者必须<Notice text="已加入白名单" />，未加入白名单者无法参与此次投资</li>
                  <li style={{ listStyleType: 'decimal', margin: '.5rem 0' }}>每个投资人对应一个<Notice text="专属转账地址" />，其他人请勿往此地址转币。</li>
                  <li style={{ listStyleType: 'decimal', margin: '.5rem 0' }}><Notice text="使用转账的 ETH 地址必须是白名单填写的地址" />，且确认不是交易所、OTC等平台的提现地址，否则无法收到 CRE，后果自负！</li>
                </ol>
                <div>
                  <h3 className="text-center">投资汇率</h3>
                  <Panel text={`1 ETH = ${this.state.scale} CRE`} />
                  <Panel text={`最低额度 ${this.state.limit} ETH`} />
                  {
                    this.state.lock > 0
                      ? <Panel text={`自公售发币后锁定 ${this.state.lock} 个月`} />
                      : null
                  }
                  <div
                    style={{
                      boxSizing: 'border-box',
                      padding: '1.5rem 1.2rem 0 1.2rem',
                      textAlign: 'center',
                      margin: '2rem 0',
                      border: '1px solid wheat',
                      backgroundColor: '#fff7e9',
                    }}>
                    <h4 style={{ margin: '0 0 .8rem 0' }}>{this.state.username}投资转账的地址是</h4>
                    <input
                      tabIndex={-1}
                      role="button"
                      className="bold m-t-10 m-b-10 text-center"
                      style={{
                        width: '100%',
                        overflow: 'visible',
                        padding: '6px 0',
                        fontSize: '.8rem',
                        backgroundColor: '#20d0db',
                        color: '#f2f2f2',
                        border: 'none',
                      }}
                      onClick={(event) => {
                        copy(event.target, () => {
                          this.props.toast('复制成功!')
                        })
                      }}
                      readOnly
                      value={this.state.address}
                    />
                    <h4 className="text-center" style={{ marginBottom: '0' }}>剩余投资时间</h4>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div
                        id="countdown"
                        className="dis-flex"
                        style={{ minWidth: '40rem', transform: 'scale(.5)' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center" style={{ width: '96%', margin: '0 auto 1.5rem auto', lineHeight: '1.3rem', fontSize: '.8rem' }}>
                  如果您成功地参与了此次投资，您会收到 <Notice text={officialEmail} /> 发送的投资确认邮件
                </div>
                <hr />
              </div>
              : <Loading content="Loading" />
          }
          <QRCode />
          <Paragraph className="text-center m-t-10">
            如有疑问请联系微信社区助理<Notice text="“cybereits”" /><br />
          </Paragraph>
        </div>
        : <div className="container form-container bg-gray text-center fore-blue">
          <h1 style={{ margin: '4rem auto' }}>您的参投资格已失效</h1>
          <h2>如有疑问，请联系管理员</h2>
          <QRCode />
        </div>
    )
  }
}
