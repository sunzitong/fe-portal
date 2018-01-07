import React from 'react'
import PropTypes from 'prop-types'
import {
  FlatButton,
  TextField,
  // SelectField,
  // MenuItem,
  // Dialog,
} from 'material-ui'
import Overdrive from 'react-overdrive'

import Checkbox from '../components/Checkbox'
import Icon from '../components/Icon'
import Loading from '../components/Loading'

import { downloadWhitePaper, downloadTerm } from '../common/resource'

import whitelistApis from '../apis/whitelist'
import { chk_id, chk_email, chk_mobile, chk_eth_address } from '../common/validator'

import styles from './WhitelistStages.scss'

const {
  officialEmail,
} = window.__INIT_STATE

const CustomizedContainerStyle = {
  color: 'gray',
  height: '50px',
  justifyContent: 'space-around',
  margin: '1rem 0',
}

const CustomizedSpan = {
  display: 'inline-block',
  boxSizing: 'border-box',
  width: '5.5rem',
}

const CustomizedText = ({ label, placeholder, ...rest }) => (
  <div className="dis-flex" style={CustomizedContainerStyle} >
    <span style={CustomizedSpan}>{label}</span>
    <TextField
      {...rest}
      tabIndex={0}
      hintText={placeholder}
    />
  </div>
)

const CustomizedWrapper = ({ label, children }) => (
  <div className="dis-flex" style={CustomizedContainerStyle} >
    <span style={CustomizedSpan}>{label}</span>
    {children}
  </div>
)
const Danger = ({ text, ...rest }) => (
  <span {...rest} className="fore-red">{text}</span>
)

export const StageBanner = ({ title, subTitle }) => (
  <section className={styles.banner}>
    <div className={styles.bannerTitle}>
      {title}
    </div>
    <div className={styles.bannerSubTitle}>{subTitle}</div>
  </section>
)

export const StageContainer = ({ children, ...rest }) => (
  <Overdrive id="step-container">
    <div
      className={styles.container}
      {...rest}
    >
      {children}
    </div>
  </Overdrive>
)

export const StageContent = ({ children, ...rest }) => (
  <div
    className={styles.content}
    {...rest}
  >
    {children}
  </div>
)

const TermLink = ({ content, ...rest }) => (
  <div
    className={`dis-flex ${styles.termlink}`}
    {...rest}
  >
    <div>{content}</div>
    <i className="fa fa-chevron-right" />
  </div>
)

export class StepOne extends React.Component {

  static propTypes = {
    alert: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      ready: false,
    }
    this.next = this.next.bind(this)
  }

  next() {
    if (this.state.ready) {
      this.props.nextStep()
    } else {
      this.props.alert({
        title: '提示',
        msg: '请先阅读并同意条款',
      })
    }
  }

  render() {
    return (
      <StageContainer>
        <StageBanner
          title="申请参加CRE公售"
          subTitle="请认真阅读 CYBEREITS 的条款，CYBEREITS 的白皮书并确认。"
        />
        <StageContent>
          <TermLink
            content="CYBEREITS 条款"
            onClick={downloadTerm}
          />
          <TermLink
            content="CYBEREITS 白皮书"
            onClick={downloadWhitePaper}
          />
          <Checkbox
            checked={this.state.ready}
            onClick={() => { this.setState(prev => ({ ready: !prev.ready })) }}
          >
            我已经认真阅读 CYBEREITS 的条款和 CYBEREITS 白皮书。
          </Checkbox>
          <FlatButton
            tabIndex={0}
            fullWidth
            className={`${styles.button} ${this.state.ready ? '' : styles.buttonDisabled}`}
            onClick={this.next}
          >
            继续
          </FlatButton>
        </StageContent>
      </StageContainer>
    )
  }
}

export class StepTwo extends React.Component {

  static propTypes = {
    alert: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      agreeTerms1: false,
      agreeTerms2: false,
      agreeTerms3: false,
      agreeTerms4: false,
      ready: false,
    }
    this.next = this.next.bind(this)
    this.toggleTerm = this.toggleTerm.bind(this)
  }

  next() {
    if (this.state.ready) {
      this.props.nextStep()
    } else {
      this.props.alert({
        title: '提示',
        msg: '请确认您符合并勾选所有条件',
      })
    }
  }

  toggleTerm(index) {
    this.setState(prev => ({
      [`agreeTerms${index}`]: !prev[`agreeTerms${index}`],
    }), () => {
      this.setState(prev => ({
        ready: prev.agreeTerms1 &&
          prev.agreeTerms2 &&
          prev.agreeTerms3 &&
          prev.agreeTerms4,
      }))
    })
  }

  render() {
    return (
      <StageContainer>
        <StageBanner
          title="悉知您的客户（KYC）"
          subTitle="请在购买前填写相应的 KYC 表格，这将有助我们能联络您和给予您更好的服务。"
        />
        <StageContent>
          <Checkbox
            checked={this.state.agreeTerms1}
            onClick={() => this.toggleTerm(1)}
          >
            我确认我不是来自美国、中国大陆、马来西亚和其它禁止首次公开发行代币（ICO）的公民、居民或法人，同时也不会代美国、中国大陆、马来西亚的居民购买。
          </Checkbox>
          <Checkbox
            checked={this.state.agreeTerms2}
            onClick={() => this.toggleTerm(2)}
          >
            我认同并知悉上述声明并承诺会遵守关于反洗钱和反资助恐怖主义的规定。
          </Checkbox>
          <Checkbox
            checked={this.state.agreeTerms3}
            onClick={() => this.toggleTerm(3)}
          >
            我已经认真阅读项目白皮书或项目推介书，并完全了解了 CYBEREITS Token 的风险。
          </Checkbox>
          <Checkbox
            checked={this.state.agreeTerms4}
            onClick={() => this.toggleTerm(4)}
          >
            我完全知晓并了解加密货币高风险的性质，购买 CYBEREITS Token 不能保证购买本金的安全，也不会产生利息、收入，并且增长也不稳定。
          </Checkbox>
          <FlatButton
            tabIndex={0}
            fullWidth
            className={`${styles.button} ${this.state.ready ? '' : styles.buttonDisabled}`}
            onClick={this.next}
          >
            继续
          </FlatButton>
        </StageContent>
      </StageContainer>
    )
  }
}

export class StepThree extends React.Component {

  static propTypes = {
    formData: PropTypes.object.isRequired,
    alert: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      emailValid: false,
      emailValidDisabled: false,
      realname: this.props.formData.name,
      identityNo: this.props.formData.idno,
      mobile: this.props.formData.mobile,
      email: this.props.formData.email,
      validCode: this.props.formData.checkcode,
      amount: this.props.formData.ethcount,
      walletAddr: this.props.formData.ethaddress,
    }
    this.submit = this.submit.bind(this)
    this.sendValidCode = this.sendValidCode.bind(this)
    this.valid = this.valid.bind(this)
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
    } else if (!this.state.amount || isNaN(+this.state.amount) || +this.state.amount > 5 || +this.state.amount < 1) {
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
      this.props.nextStep({
        wechat: '',
        community_id: '1',
        email: this.state.email,
        checkcode: this.state.validCode,
        name: this.state.realname,
        idno: this.state.identityNo,
        mobile: this.state.mobile,
        ethcount: this.state.amount,
        ethaddress: this.state.walletAddr,
      })
    }
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
      <StageContainer>
        <StageBanner
          title="CYBEREITS 白名单注册"
        />
        <StageContent style={{ width: '100%' }}>
          <CustomizedText label="真实姓名" type="text" value={this.state.realname} placeholder="请输入身份证上的姓名" onChange={(event, newValue) => { this.setState({ realname: newValue }) }} />
          <CustomizedText label="身份证号" type="text" value={this.state.identityNo} placeholder="请输入对应的身份证号码" onChange={(event, newValue) => { this.setState({ identityNo: newValue }) }} />
          <CustomizedText label="手机号码" type="number" value={this.state.mobile} placeholder="请输入常用手机" onChange={(event, newValue) => { this.setState({ mobile: newValue }) }} />
          <CustomizedWrapper label="邮箱地址">
            <div>
              <TextField
                type="email"
                tabIndex={0}
                hintText="请输入常用邮箱"
                value={this.state.email}
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
          <CustomizedText label="邮箱验证码" type="text" value={this.state.validCode} placeholder="请输入邮箱收到的验证码" onChange={(event, newValue) => { this.setState({ validCode: newValue }) }} />
          <CustomizedText label="投资意向" type="number" value={this.state.amount} placeholder="请输入ETH投资数量（1-5ETH）" onChange={(event, newValue) => { this.setState({ amount: newValue }) }} />
          <CustomizedText label="钱包地址" type="text" value={this.state.walletAddr} placeholder="请输入用于投资的ETH钱包地址" onChange={(event, newValue) => { this.setState({ walletAddr: newValue }) }} />
          <div style={{ width: '80%', margin: '0 auto' }}>
            <FlatButton
              tabIndex={0}
              fullWidth
              className={styles.button}
              onClick={this.submit}
            >继续</FlatButton>
          </div>
        </StageContent>
      </StageContainer>
    )
  }
}

export const StepFour = ({
  formData,
  lastStep,
  nextStep,
}) =>
  (
    <StageContainer>
      <StageBanner title="地址确认" />
      <StageContent>
        <CustomizedText
          label="钱包地址"
          type="text"
          value={formData.ethaddress}
          style={{ width: '90%' }}
          readOnly
        />
        <p className="small fore-gray" style={{ lineHeight: '1.5rem', margin: '2rem auto' }}>请再次确认以上地址为<Danger text="个人的 ETH 钱包地址" />，认证成功后将只接受该地址的<Danger text=" ETH 投资" />，并且该地址将用于 CRE 的<Danger text=" Token 发放" />。</p>
        <div className="fore-red label">注：请勿使用交易所或 OTC 站内地址，否则出现收不到 CRE 的情况，请知晓！</div>
        <div className="dis-flex">
          <FlatButton
            tabIndex={0}
            className={`${styles.button} ${styles.buttonDisabled}`}
            onClick={lastStep}
          >取消</FlatButton>
          <FlatButton
            tabIndex={0}
            className={styles.button}
            onClick={nextStep}
          >确认</FlatButton>
        </div>
      </StageContent>
    </StageContainer>
  )

StepFour.propTypes = {
  nextStep: PropTypes.func.isRequired,
  lastStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
}

export class StepFive extends React.Component {

  static propTypes = {
    formData: PropTypes.object.isRequired,
    alert: PropTypes.func.isRequired,
    lastStep: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    whitelistApis
      .submit(this.props.formData)
      .then(() => {
        this.setState({
          loaded: true,
        })
      })
      .catch((err) => {
        this.props.alert({
          title: '错误',
          msg: err.message,
          callback: this.props.lastStep,
          btnText: '返回上一步',
        })
      })
  }

  render() {
    return (
      this.state.loaded
        ? <StageContainer>
          <div className="text-center fore-green">
            <Icon
              logo="checked"
              className={`animated bounceInDown ${styles.checkedIcon}`}
            />
            <h2>恭喜您注册成功!</h2>
          </div>
          <div className={styles.succContent}>
            <p>
              次日十点 <span className="fore-green">{officialEmail}</span> 会依照白名单投资序列依次发放邀请邮件，请按照邮件中的指示完成投资。
            </p>
          </div>
          <div
            className="label fore-red w-80"
            style={{
              wordBreak: 'break-all',
              lineHeight: '1.2rem',
            }}>
            * 所有 cybereits 的官方行为都会由 {officialEmail} 邮箱进行发送，且<b>邮件不会提供转币地址</b>，除此之外的一切关于 cybereits 的投资邮件均可能为诈骗，请当心留意！
          </div>
        </StageContainer>
        : <StageContainer>
          <Loading content="Loading" />
        </StageContainer>
    )
  }
}
