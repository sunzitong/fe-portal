import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  // AppBar,
  Dialog,
  FlatButton,
} from 'material-ui'

// import SideMenus from './SideMenus'
import Toast from './Toast'

import { closeDialog } from '../actions/dialog'

class App extends React.Component {

  static defaultProps = {
    alertMessagePayload: {},
    confirmMessagePayload: {},
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    alertMessagePayload: PropTypes.object,
    confirmMessagePayload: PropTypes.object,
    closeDialog: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {}
    this.renderDialog = this.renderDialog.bind(this)
  }

  // 渲染弹窗
  renderDialog() {
    const {
      alertMessagePayload,
      confirmMessagePayload,
    } = this.props

    if (alertMessagePayload) { // 警告弹窗
      let actions = [
        <FlatButton
          label={alertMessagePayload.btnText}
          primary
          onClick={() => {
            this.props.closeDialog()
            // execute the callback function
            if (typeof alertMessagePayload.callback === 'function') {
              alertMessagePayload.callback()
            }
          }}
        />,
      ]

      return (
        <Dialog
          title={alertMessagePayload.title}
          titleStyle={{
            backgroundColor: '#faf1ba',
            padding: '.8rem 1.4rem',
            marginBottom: '1rem',
          }}
          actions={actions}
          open
          onRequestClose={this.props.closeDialog}
        >
          {alertMessagePayload.msg}
        </Dialog>
      )
    }

    if (confirmMessagePayload) { // confirm 弹窗
      let actions = [
        <FlatButton
          label={confirmMessagePayload.cancelText}
          onClick={() => {
            this.props.closeDialog()
            if (typeof confirmMessagePayload.cancelCallback === 'function') {
              confirmMessagePayload.cancelCallback()
            }
          }}
          primary
        />,
        <FlatButton
          label={confirmMessagePayload.confirmText}
          onClick={() => {
            this.props.closeDialog()
            // execute the callback function
            if (typeof confirmMessagePayload.confirmCallback === 'function') {
              confirmMessagePayload.confirmCallback()
            }
          }}
          primary
        />,
      ]
      return (
        <Dialog
          title={confirmMessagePayload.title}
          titleStyle={{
            backgroundColor: '#baf1fa',
            padding: '.8rem 1.4rem',
            marginBottom: '1rem',
          }}
          actions={actions}
          modal
          open
        >
          {confirmMessagePayload.msg}
        </Dialog>
      )
    }

    return null
  }

  render() {
    return (
      <div className="container">
        {this.renderDialog()}
        <Toast />
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
    title: state.title,
    userLogin: state.userLogin,
    alertMessagePayload: state.alertMessage,
    confirmMessagePayload: state.confirmMessage,
  }), {
    closeDialog,
  },
)(App)
