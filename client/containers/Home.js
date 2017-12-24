import React from 'react'
import { connect } from 'react-redux'

import { alert, confirm } from '../actions/dialog'

const mapStateToProps = state => ({})
const mapDispatchToProps = { alert, confirm }

@connect(mapStateToProps, mapDispatchToProps)
export default class WhiteList extends React.Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  render() {
    return (
      <div className="container form-container bg-gray fore-blue">

      </div>
    )
  }
}
