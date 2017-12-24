import React from 'react'
import { connect } from 'react-redux'

import { toast } from '../actions/toast'

import Icon from '../components/Icon'
import TitleLogo from '../components/TitleLogo'

import whitelistApis from '../apis/whitelist'

const OFFICIAL_EMAIL = 'info@cybereits.com'

const copy = (ele, callback) => {
  if (document.execCommand) {
    ele.focus()
    ele.setSelectionRange(0, ele.value.length)
    document.execCommand('copy', true)
    ele.blur()
    callback()
  }
}

const Notice = ({ text, ...rest }) => (
  <span {...rest} className="fore-blue bold">{text}</span>
)

const Panel = ({ text, ...rest }) => (
  <div className="text-center fore-black m-b-10" {...rest}>{text}</div>
)

const Paragraph = ({ children, className, ...rest }) => (
  <p className={`small w-80 fore-gray m-b-10 ${className || ''}`} {...rest}>
    {children}
  </p>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = { toast }

const QRCode = () => (
  <Icon logo="qrcode" style={{ width: '8rem', height: '8rem', margin: '20px auto' }} />
)

@connect(mapStateToProps, mapDispatchToProps)
export default class Participate extends React.Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)

    let token = this.props.match.params.token

    this.state = {
      valid: !!token,
      scale: 10000,
      limit: 10,
      address: '0xaaaaabbbbbcccccdddddeeeeefffff0000011111',
    }
  }

  componentDidMount() {
    // todo
    window
      .jQuery('#countdown')
      .countdown({
        image: '/images/digits.png',
        startTime: '00:01:00:03',
        timerEnd: () => {
          this.setState({
            valid: false,
          })
        },
      })
  }

  render() {
    return (
      this.state.valid
        ? <div className="container form-container bg-gray fore-blue">
          <TitleLogo />
          <h2 className="text-center" style={{ margin: '0 0 2.4rem 0' }}>CRE 私募活动</h2>
          <Paragraph>
            此次投资的参与者必须<Notice text="已加入白名单" />，未加入白名单者无法参与此次投资
          </Paragraph>
          <Paragraph>
            <Notice text="使用转账的 ETH 地址必须是白名单填写的地址" />，且确认不是交易所、OTC等平台的提现地址，否则无法收到 CRE，后果自负！
          </Paragraph>
          <h2 className="text-center">投资汇率</h2>
          <Panel text={`1 ETH = ${this.state.scale} CRE`} />
          <Panel text={`最低额度 ${this.state.limit} ETH`} />
          <Panel text="自公售发币后锁定 2 个月" />
          <div
            className="bg-white"
            style={{
              boxSizing: 'border-box',
              padding: '1.5rem',
              textAlign: 'center',
              margin: '2rem 0',
            }}>
            <h2 style={{ margin: '0 0 10px 0' }}>您的参投地址为</h2>
            <input
              tabIndex={-1}
              role="button"
              className="fore-black bold m-t-10 m-b-10 text-center"
              style={{
                border: '1px solid #dfdfdf',
                overflow: 'visible',
                width: '100%',
                padding: '6px 0',
                fontSize: '.8rem',
              }}
              onClick={(event) => {
                copy(event.target, () => {
                  this.props.toast('Copy Successed!')
                })
              }}
              readOnly
              value={this.state.address}
            />
            <div className="fore-gray m-t-10">Gas Limit: 200000</div>
            <div className="fore-gray m-t-10">Gas Price: 20 gwei</div>
          </div>
          <h2 className="text-center" style={{ marginBottom: '0' }}>参投倒计时</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              id="countdown"
              className="dis-flex"
              style={{ minWidth: '36rem', transform: 'scale(.5)' }}
            />
          </div>
          <h2 className="text-center">投资状态</h2>
          <Paragraph className="text-center" style={{ marginBottom: '1.5rem', lineHeight: '1.3rem', fontSize: '1rem' }}>
            如果您成功地参与了此次投资，您会收到<br />
            <Notice text={OFFICIAL_EMAIL} /><br />
            发送的投资确认邮件
          </Paragraph>
          <hr />
          <Paragraph className="text-center m-t-10">
            如有疑问请联系微信社区助理<Notice text="“cybereits”" /><br />
          </Paragraph>
          <QRCode />
        </div>
        : <div className="container form-container bg-gray text-center fore-blue">
          <h1 style={{ margin: '4rem auto' }}>您的参投资格已过期</h1>
          <h2>如有疑问，请联系管理员</h2>
          <QRCode />
        </div>
    )
  }
}
