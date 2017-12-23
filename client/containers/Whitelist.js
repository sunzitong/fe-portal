import React from 'react'
import { connect } from 'react-redux'
import { TextField, FlatButton, SelectField, MenuItem, Dialog } from 'material-ui'

import { alert, confirm } from '../actions/dialog'
import TitleLogo from '../components/TitleLogo'
import apis from '../apis'
import { chk_id, chk_email, chk_mobile, chk_eth_address } from '../common/validator'

const mapStateToProps = state => ({})
const mapDispatchToProps = { alert, confirm }

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
  borderRight: '1px solid gray',
}

const CustomizedText = ({ label, placeholder, ...rest }) => (
  <div className="dis-flex" style={CustomizedContainerStyle} >
    <span style={CustomizedSpan}>{label}</span>
    <TextField
      {...rest}
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

const ConfirmDialog = ({ open, confirm, cancel, walletAddr }) => (
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
      <p><b>请再次确认</b>以上地址为<span className="fore-blue">个人的 ETH 钱包地址</span>，认证成功后将只接受该地址的<span className="fore-blue"> ETH 投资</span>，并且该地址将用于 CRE 的<span className="fore-blue"> Token 发放</span>。</p>
      <div className="fore-red label">注：请勿使用交易所或 OTC 站内地址，否则出现收不到 CRE 的情况，请知晓！</div>
      <div className="dis-flex" style={{ marginTop: '1.6rem' }}>
        <FlatButton
          keyboardFocused
          primary
          style={{
            backgroundColor: '#004990',
            color: 'white',
          }}
          onClick={confirm}
        >确认</FlatButton>
        <FlatButton style={{ backgroundColor: '#dedede' }} onClick={cancel}>取消</FlatButton>
      </div>
    </section>
  </Dialog>
)

@connect(mapStateToProps, mapDispatchToProps)
export default class WhiteList extends React.Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      communities: [],
      openConfirm: false,
      community: null,
      wxAccount: null,
      realname: '赵彪',
      identityNo: '370481198808128534',
      mobile: '13969737746',
      email: 'marsoln1988@gmail.com',
      validCode: '123123',
      amount: '20',
      walletAddr: '0xCbad28F935d881B641BEE37c49293341C86fcCE6',
    }
    this.changeCommunity = this.changeCommunity.bind(this)
    this.submit = this.submit.bind(this)
    this.confirmSubmit = this.confirmSubmit.bind(this)
  }

  componentDidMount() {
    apis.getCommunities()
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
    // todo
  }

  render() {
    return (
      <div className="container bg-gray fore-blue">
        <ConfirmDialog open={this.state.openConfirm} walletAddr={this.state.walletAddr} cancel={() => { this.setState({ openConfirm: false }) }} confirm={this.confirmSubmit} />
        <TitleLogo />
        <h2 className="text-center" style={{ margin: '0 0 2.4rem 0' }}>私募白名单注册</h2>
        <section className="text-center">
          <CustomizedText label="微信账号" value={this.state.wxAccount} placeholder="请输入当前微信号" onChange={(event, newValue) => { this.setState({ wxAccount: newValue }) }} />
          <CustomizedWrapper label="来源社区">
            <SelectField
              hintText="选择来源社区"
              underlineFocusStyle={UnderLineStyle}
              value={this.state.community}
              onChange={this.changeCommunity}
            >
              {
                this.state.communities.map(({ id, name }) => (
                  <MenuItem key={id} value={id} label={name} primaryText={name} />
                ))
              }
            </SelectField>
          </CustomizedWrapper>
          <CustomizedText label="真实姓名" placeholder="请输入身份证上的姓名" onChange={(event, newValue) => { this.setState({ realname: newValue }) }} />
          <CustomizedText label="身份证号" placeholder="请输入对应的身份证号码" onChange={(event, newValue) => { this.setState({ identityNo: newValue }) }} />
          <CustomizedText label="手机号码" type="number" placeholder="请输入常用手机" onChange={(event, newValue) => { this.setState({ mobile: newValue }) }} />
          <CustomizedText label="邮箱地址" type="email" placeholder="请输入常用邮箱" onChange={(event, newValue) => { this.setState({ email: newValue }) }} />
          <CustomizedText label="邮箱验证码" placeholder="请输入邮箱收到的验证码" onChange={(event, newValue) => { this.setState({ validCode: newValue }) }} />
          <CustomizedText label="投资意向" type="number" placeholder="请输入ETH投资数量（≥10ETH）" onChange={(event, newValue) => { this.setState({ amount: newValue }) }} />
          <CustomizedText label="钱包地址" placeholder="请输入用于投资的ETH钱包地址" onChange={(event, newValue) => { this.setState({ walletAddr: newValue }) }} />
          <div className="fore-red label" style={{ width: '90%', margin: '0 auto' }}>*此钱包地址用于 ERC20 代币 CRE 的收发，禁止填入交易所或 OTC 站内地址</div>
          <div style={{ width: '80%', margin: '20px auto' }}>
            <FlatButton fullWidth style={{ backgroundColor: '#004990', color: 'white', height: '2.6rem' }} onClick={this.submit}>完成注册</FlatButton>
          </div>
        </section>
      </div>
    )
  }
}
