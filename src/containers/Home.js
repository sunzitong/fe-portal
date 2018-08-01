import React from 'react'
import Icon from '../components/Icon'
import Header from '../components/Header'
import FirstBlock from '../components/FirstBlock'
import Introduction from '../components/Introduction'
import ProjectDone from '../components/ProjectDone'
import TokenValue from '../components/TokenValue'
import CreAssignment from '../components/CreAssignment'
import Planning from '../components/Planning'
import Team from '../components/Team'
import Investment from '../components/Investment'
import ProjectAdviser from '../components/ProjectAdviser'
import Consultant from '../components/Consultant'
import i18n from '../i18n'

import styles from './Home.less'

export default class WhiteList extends React.Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    let locale = window.localStorage.getItem('__locale')
    this.state = {
      localeType: locale && i18n[locale] ? locale : 'zh',
      locale: locale && i18n[locale] ? i18n[locale] : i18n.zh,
      showWechatQrcode: false,
      containerBg: '#13143f',
      openWhitelist: false,
      // saleEnded: saleEnded,
      whitelistDisabled: false,
    }
    this.switchLocale = this.switchLocale.bind(this)
    this.goToWhiteList = this.goToWhiteList.bind(this)
  }

  switchLocale(type) {
    if (i18n[type]) {
      this.setState({
        localeType: type,
        locale: i18n[type],
      }, () => {
        window.localStorage.setItem('__locale', type)
      })
    }
  }

  goToWhiteList() {
    this.props.history.push('/pwl')
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          bannerList={[
            {
              href: '#intro',
              text: this.state.locale.intro,
              active: true,
            },
            {
              href: '#product_done',
              text: this.state.locale.product_done,
              active: false,
            },
            {
              href: '#token_value',
              text: this.state.locale.token_value,
              active: false,
            },
            {
              href: '#cre_assignment',
              text: this.state.locale.cre_assignment,
              active: false,
            },
            {
              href: '#roadmap',
              text: this.state.locale.roadmap,
              active: false,
            },
            {
              href: '#team_intro',
              text: this.state.locale.team_intro,
              active: false,
            },
            {
              href: '#early_investors',
              text: this.state.locale.early_investors,
              active: false,
            },
            {
              href: '#project_adviser',
              text: this.state.locale.project_adviser,
              active: false,
            },
            {
              href: '#partners_adviser',
              text: this.state.locale.partners_adviser,
              active: false,
            },
          ]}
          switchLocale={(lan) => {
            this.switchLocale(lan)
          }}
          localeType={this.state.localeType}
        />
        <div className={styles.container}>
          <FirstBlock
            title={this.state.locale.primary_title}
            subTitle={this.state.locale.sub_title}
          />
          <Introduction
            id="intro"
          />
          <ProjectDone id="product_done" />
          <TokenValue id="token_value" />
          <CreAssignment id="cre_assignment" />
          <Planning id="roadmap" />
          <Team id="team_intro" />
          <Investment id="early_investors" />
          <ProjectAdviser id="project_adviser" />
          <Consultant id="partners_adviser" />
          {/* <div id="cre_assignment" style={{ height: '1200px', backgroundColor: 'rgb(247, 251, 252)' }}>
            12
          </div> */}
          <footer className={styles.footer}>
            <div className={styles.footer_logo_container}>
              <a href="https://twitter.com/cybereits" target="blank">
                <Icon logo="twitter" className={styles.footer_logo} />
              </a>
              <a>
                <Icon
                  logo="wechat"
                  className={styles.footer_logo}
                  onClick={() => { this.setState(({ showWechatQrcode }) => ({ showWechatQrcode: !showWechatQrcode })) }}
                />
                {
                  this.state.showWechatQrcode
                    ? <Icon logo="qrcode" className={`${styles.footer_logo_wechat} animated fadeInUp`} style={{border: '1px solid rgb(56, 144, 230)'}} />
                    : null
                }
              </a>
              <a href="https://t.me/joinchat/HJivSA3RRwBtzkXvoqDHeA" target="blank">
                <Icon logo="telegram" className={styles.footer_logo} />
              </a>
              <a href={'mailto:info@mail.cybereits.com'}>
                <Icon logo="mail" className={styles.footer_logo} />
              </a>
            </div>
            <div className={styles.Copyright}>
              Copyright © 2017 Cybereits - All Rights Reserved
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
