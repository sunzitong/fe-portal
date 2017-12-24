import React from 'react'
import { connect } from 'react-redux'

import { SmallTitleLogo } from '../components/TitleLogo'

import { alert, confirm } from '../actions/dialog'

const mapDispatchToProps = { alert, confirm }

@connect(null, mapDispatchToProps)
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
      <div className="container bg-darkblue">
        <header style={{ height: '4rem', width: '100%' }}>
          <SmallTitleLogo style={{ height: '100%', minWidth: '7rem', margin: 'auto 20px' }} />
          <ul>
            <li>{}</li>
          </ul>
        </header>
        <h1 className="text-center fore-white">
          Coming soon
        </h1>
      </div>
    )
  }
}
