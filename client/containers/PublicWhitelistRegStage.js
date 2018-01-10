import React from 'react'
import { connect } from 'react-redux'

import { alert, confirm } from '../actions/dialog'

import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from '../components/WhitelistStages'

const { whitelistDisabled } = window.__INIT_STATE

const mapDispatchToProps = { alert, confirm }

@connect(null, mapDispatchToProps)
export default class WhiteList extends React.Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      whitelistDisabled,
      currStep: 1,
      formData: {
        wechat: '',
        community_id: '1',
        name: '',
        idno: '',
        mobile: '',
        email: '',
        checkcode: '',
        ethcount: '',
        ethaddress: '',
      },
    }
    this.moveNext = this.moveNext.bind(this)
    this.movePrev = this.movePrev.bind(this)
  }

  componentDidMount() {
  }

  moveNext(data) {
    if (this.state.currStep < 5) {
      if (this.state.currStep === 3) {
        this.setState(prev => ({
          formData: data,
          currStep: prev.currStep + 1,
        }))
      } else {
        this.setState(prev => ({
          currStep: prev.currStep + 1,
        }))
      }
    }
  }

  movePrev() {
    if (this.state.currStep > 1) {
      this.setState(prev => ({
        currStep: prev.currStep - 1,
      }))
    }
  }

  render() {
    return (
      this.state.whitelistDisabled
        ? <div className="container dis-flex fore-blue" style={{ justifyContent: 'center', flexDirection: 'column' }}>
          <h2>白名单注册已关闭</h2>
          <h4>Whitelist register entrance has been closed</h4>
        </div>
        : <div className="container form-container fore-blue">
          {
            this.state.currStep === 1
              ? <StepOne
                alert={this.props.alert}
                nextStep={this.moveNext}
              />
              : null
          }
          {
            this.state.currStep === 2
              ? <StepTwo
                alert={this.props.alert}
                nextStep={this.moveNext}
              />
              : null
          }
          {
            this.state.currStep === 3
              ? <StepThree
                alert={this.props.alert}
                nextStep={this.moveNext}
                formData={this.state.formData}
              />
              : null
          }
          {
            this.state.currStep === 4
              ? <StepFour
                alert={this.props.alert}
                formData={this.state.formData}
                nextStep={this.moveNext}
                lastStep={this.movePrev}
              />
              : null
          }
          {
            this.state.currStep === 5
              ? <StepFive
                alert={this.props.alert}
                formData={this.state.formData}
                lastStep={this.movePrev}
              />
              : null
          }
        </div>
    )
  }
}
