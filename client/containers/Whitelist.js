import React from 'react'
import { connect } from 'react-redux'
import { TextField, FlatButton, SelectField, MenuItem, Dialog } from 'material-ui'

import TitleLogo from '../components/TitleLogo'

import whitelistApis from '../apis/whitelist'
import { alert, confirm } from '../actions/dialog'
import { chk_id, chk_email, chk_mobile, chk_eth_address } from '../common/validator'

const OFFICIAL_EMAIL = 'info@mail.cybereits.com'

const UnderLineStyle = {
  borderColor: '#004990',
}

const CustomizedContainerStyle = {
  width: '100%',
  height: '50px',
  backgroundColor: 'white',
  justifyContent: 'space-around',
  margin: '.5rem 0',
}

const CustomizedSpan = {
  display: 'inline-block',
  boxSizing: 'border-box',
  width: '5.5rem',
}

const Notice = ({ text, ...rest }) => (
  <span {...rest} className="fore-blue">{text}</span>
)

const Danger = ({ text, ...rest }) => (
  <span {...rest} className="fore-red">{text}</span>
)

const CustomizedText = ({ label, placeholder, ...rest }) => (
  <div className="dis-flex" style={CustomizedContainerStyle} >
    <span style={CustomizedSpan}>{label}</span>
    <TextField
      {...rest}
      tabIndex={0}
      hintText={placeholder}
      underlineFocusStyle={UnderLineStyle}
    />
  </div>
)

const CustomizedWrapper = ({ label, children }) => (
  <div className="dis-flex" style={CustomizedContainerStyle} >
    <span style={CustomizedSpan}>{label}</span>
    {children}
  </div>
)

const ConfirmDialog = ({ open, confirm, confirmDisable, cancel, walletAddr }) => (
  <Dialog
    open={open}
    modal={false}
    autoScrollBodyContent
    title="地址确认"
    titleStyle={{
      color: '#004990',
      textAlign: 'center',
      padding: '.8rem 1.4rem',
      fontSize: '1.5rem',
    }}
  >
    <section>
      <p style={{ wordBreak: 'break-all' }}>钱包地址:{walletAddr}</p>
      <p><b>请再次确认</b>以上地址为<Notice text="个人的 ETH 钱包地址" />，认证成功后将只接受该地址的<Notice text=" ETH 投资" />，并且该地址将用于 CRE 的<Notice text=" Token 发放" />。</p>
      <div className="fore-red label">注：请勿使用交易所或 OTC 站内地址，否则出现收不到 CRE 的情况，请知晓！</div>
      <div className="dis-flex" style={{ marginTop: '1.6rem' }}>
        <FlatButton
          primary
          style={{
            backgroundColor: '#004990',
            color: 'white',
          }}
          disabled={confirmDisable}
          onClick={confirm}
        >确认</FlatButton>
        <FlatButton style={{ backgroundColor: '#dedede' }} onClick={cancel}>取消</FlatButton>
      </div>
    </section>
  </Dialog>
)

const mapDispatchToProps = { alert, confirm }

@connect(null, mapDispatchToProps)
export default class WhiteList extends React.Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      communities: [],
      openConfirm: false,
      emailValid: false,
      emailValidDisabled: false,
      submitBtnDisable: false,
      submitSucc: false,
      community: null,
      wxAccount: null,
      realname: '',
      identityNo: '',
      mobile: '',
      email: '',
      validCode: '',
      amount: '',
      walletAddr: '',
    }
    this.changeCommunity = this.changeCommunity.bind(this)
    this.submit = this.submit.bind(this)
    this.confirmSubmit = this.confirmSubmit.bind(this)
    this.sendValidCode = this.sendValidCode.bind(this)
  }

  componentDidMount() {
    whitelistApis
      .getCommunities()
      .then((data) => {
        this.setState({
          communities: data,
        })
      })
  }

  changeCommunity(event, index, value) {
    this.setState({
      community: value,
    })
  }

  valid() {
    if (!this.state.realname) {
      this.props.alert({
        title: '警告',
        msg: '请填写真实姓名',
      })
    } else if (!chk_id(this.state.identityNo)) {
      this.props.alert({
        title: '警告',
        msg: '请填写正确的身份证证件',
      })
    } else if (!chk_mobile(this.state.mobile)) {
      this.props.alert({
        title: '警告',
        msg: '请填写正确的手机号码',
      })
    } else if (!chk_email(this.state.email)) {
      this.props.alert({
        title: '警告',
        msg: '请填写正确的邮箱地址',
      })
    } else if (!this.state.validCode) {
      this.props.alert({
        title: '警告',
        msg: '请填写您邮箱收到的验证码',
      })
    } else if (!this.state.amount || isNaN(+this.state.amount) || +this.state.amount < 10) {
      this.props.alert({
        title: '警告',
        msg: '请填写正确的投资数量',
      })
    } else if (!chk_eth_address(this.state.walletAddr)) {
      this.props.alert({
        title: '警告',
        msg: '请填写正确的钱包地址',
      })
    } else {
      return true
    }
    return false
  }

  submit() {
    if (this.valid()) {
      this.setState({
        openConfirm: true,
      })
    }
  }

  confirmSubmit() {
    this.setState({
      submitBtnDisable: true,
    }, () => {
      whitelistApis
        .submit({
          email: this.state.email,
          checkcode: this.state.validCode,
          name: this.state.realname,
          idno: this.state.identityNo,
          mobile: this.state.mobile,
          community_id: this.state.community,
          ethcount: this.state.amount,
          ethaddress: this.state.walletAddr,
        })
        .then(() => {
          this.setState({
            submitSucc: true,
            openConfirm: false,
          })
        })
        .catch((err) => {
          this.setState({
            submitBtnDisable: false,
          })
          this.props.alert({
            title: '错误',
            msg: err.message,
          })
        })
    })
  }

  sendValidCode() {
    whitelistApis
      .sendEmail(this.state.email)
      .catch((err) => {
        this.props.alert({
          title: '错误',
          msg: err.message,
        })
        this.setState({
          emailValidDisabled: false,
        })
      })
    this.setState({
      emailValidDisabled: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          emailValidDisabled: false,
        })
      }, 60000)
    })
  }

  render() {
    return (
      <div className="container form-container bg-gray fore-blue">
        <ConfirmDialog
          open={this.state.openConfirm}
          walletAddr={this.state.walletAddr}
          cancel={() => { this.setState({ openConfirm: false }) }}
          confirm={this.confirmSubmit}
          confirmDisable={this.state.submitBtnDisable}
        />
        <TitleLogo />
        {
          !this.state.submitSucc
            ? <div>
              <h2 className="text-center" style={{ margin: '0 0 2.4rem 0' }}>私募白名单注册</h2>
              <section className="text-center">
                <CustomizedText label="微信账号" type="text" value={this.state.wxAccount} placeholder="请输入当前微信号" onChange={(event, newValue) => { this.setState({ wxAccount: newValue }) }} />
                <CustomizedWrapper label="来源社区">
                  <SelectField
                    hintText="选择来源社区"
                    underlineFocusStyle={UnderLineStyle}
                    value={this.state.community}
                    onChange={this.changeCommunity}
                    tabIndex={0}
                  >
                    {
                      this.state.communities.map(({ id, name }) => (
                        <MenuItem key={id} value={id} label={name} primaryText={name} />
                      ))
                    }
                  </SelectField>
                </CustomizedWrapper>
                <CustomizedText label="真实姓名" type="text" placeholder="请输入身份证上的姓名" onChange={(event, newValue) => { this.setState({ realname: newValue }) }} />
                <CustomizedText label="身份证号" type="text" placeholder="请输入对应的身份证号码" onChange={(event, newValue) => { this.setState({ identityNo: newValue }) }} />
                <CustomizedText label="手机号码" type="number" placeholder="请输入常用手机" onChange={(event, newValue) => { this.setState({ mobile: newValue }) }} />
                <CustomizedWrapper label="邮箱地址">
                  <div>
                    <TextField
                      type="email"
                      tabIndex={0}
                      hintText="请输入常用邮箱"
                      underlineFocusStyle={UnderLineStyle}
                      onChange={(event, newValue) => {
                        this.setState({
                          email: newValue,
                          emailValid: chk_email(newValue),
                        })
                      }}
                    />
                    {
                      this.state.emailValid
                        ? <FlatButton
                          disabled={this.state.emailValidDisabled}
                          className="animated fadeInRight"
                          style={{
                            position: 'absolute',
                            right: '1rem',
                            color: this.state.emailValidDisabled ? '#cecece' : '#004990',
                          }}
                          onClick={this.sendValidCode}
                        >{this.state.emailValidDisabled ? '稍等可重试' : '发送验证码'}</FlatButton>
                        : null
                    }
                  </div>
                </CustomizedWrapper>
                <CustomizedText label="邮箱验证码" type="text" placeholder="请输入邮箱收到的验证码" onChange={(event, newValue) => { this.setState({ validCode: newValue }) }} />
                <CustomizedText label="投资意向" type="number" placeholder="请输入ETH投资数量（≥10ETH）" onChange={(event, newValue) => { this.setState({ amount: newValue }) }} />
                <CustomizedText label="钱包地址" type="text" placeholder="请输入用于投资的ETH钱包地址" onChange={(event, newValue) => { this.setState({ walletAddr: newValue }) }} />
                <div className="fore-red label" style={{ width: '90%', margin: '0 auto' }}>*此钱包地址用于 ERC20 代币 CRE 的收发，禁止填入交易所或 OTC 站内地址</div>
                <div style={{ width: '80%', margin: '20px auto' }}>
                  <FlatButton tabIndex={0} fullWidth style={{ backgroundColor: '#004990', color: 'white', height: '2.6rem' }} onClick={this.submit}>完成注册</FlatButton>
                </div>
              </section>
            </div>
            : <div style={{ wordBreak: 'break-all' }}>
              <div style={{ width: '80%', margin: '0 auto' }}>
                <h2 className="text-center">注册完成</h2>
              </div>
              <div className="bg-white" style={{ boxSizing: 'border-box', padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }} className="fore-black bold text-center">私募开始时间</div>
                <div className="fore-black text-center m-b-10">北京时间 <Notice text="2017年12月27日 12:00:00" /></div>
                <div className="fore-gray">届时我们会依照白名单投资序列依次从 <Notice text={OFFICIAL_EMAIL} /> 发放私募邀请邮件，请按照邮件中的指示完成投资。</div>
              </div>
              <div className="text-center fore-gray" style={{ position: 'absolute', bottom: '1rem', left: '50%', width: '80%', marginLeft: '-40%', fontSize: '.8rem' }}>
                所有 Cybereits ® 2017 的官方行为都会由<br />
                <Notice text={OFFICIAL_EMAIL} /><br />
                邮箱进行发送，<Danger text={'并且官方并不会在邮件中提供ETH收币地址'} />，除此之外的一切关于 Cybereits 的投资邮件均可能为诈骗，<Danger text={'请当心留意！'} />
              </div>
            </div>
        }
      </div>
    )
  }
}
