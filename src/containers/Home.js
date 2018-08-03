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
            whitepaper={this.state.locale.whitepaper}
            title={this.state.locale.primary_title}
            subTitle={this.state.locale.sub_title}
            subscribe={this.state.locale.subscribe}
            placeholder={this.state.locale.placeholder}
          />
          <Introduction
            id="intro"
            intro_para_1_title={this.state.locale.intro_para_1_title}
            intro_para_1={this.state.locale.intro_para_1}
            intro_para_2_title={this.state.locale.intro_para_2_title}
            intro_para_2={this.state.locale.intro_para_2}
            intro_para_3_title={this.state.locale.intro_para_3_title}
            intro_para_3={this.state.locale.intro_para_3}
          />
          <ProjectDone
            id="product_done"
            achiev_sub_title={this.state.locale.achiev_sub_title}
            achiev_para_1={this.state.locale.achiev_para_1}
            achiev_para_2={this.state.locale.achiev_para_2}
            achiev_para_3={this.state.locale.achiev_para_3}
            achiev_para_4={this.state.locale.achiev_para_4}
            achiev_para_5={this.state.locale.achiev_para_5}
            achiev_para_6={this.state.locale.achiev_para_6}
            localeType={this.state.localeType}
          />
          <TokenValue
            id="token_value"
            allocate_sub_title={this.state.locale.allocate_sub_title}
            allocate_para_1={this.state.locale.allocate_para_1}
            allocate_para_2={this.state.locale.allocate_para_2}
            allocate_para_3={this.state.locale.allocate_para_3}
            allocate_para_4={this.state.locale.allocate_para_4}
            localeType={this.state.localeType}
          />
          <CreAssignment
            id="cre_assignment"
            token_allocate={this.state.locale.token_allocate}
            fund_allocate={this.state.locale.fund_allocate}
            allocate_token_sale={this.state.locale.allocate_token_sale}
            allocate_team={this.state.locale.allocate_team}
            allocate_early_investor={this.state.locale.allocate_early_investor}
            allocate_community={this.state.locale.allocate_community}
            allocate_business={this.state.locale.allocate_business}
            allocate_org_investor={this.state.locale.allocate_org_investor}
            operation={this.state.locale.operation}
            market={this.state.locale.market}
            risk_management={this.state.locale.risk_management}
            other={this.state.locale.other}
            development={this.state.locale.development}
          />
          <Planning
            id="roadmap"
            team_building={this.state.locale.team_building}
            team_building_date={this.state.locale.team_building_date}
            seed_finance={this.state.locale.seed_finance}
            seed_finance_date={this.state.locale.seed_finance_date}
            angel_finance={this.state.locale.angel_finance}
            angel_finance_date={this.state.locale.angel_finance_date}
            alpha={this.state.locale.alpha}
            alpha_date={this.state.locale.alpha_date}
            bejiing_real_estate={this.state.locale.bejiing_real_estate}
            bejiing_real_estate_date={this.state.locale.bejiing_real_estate_date}
            american_real_estate={this.state.locale.american_real_estate}
            american_real_estate_date={this.state.locale.american_real_estate_date}
            exchange={this.state.locale.exchange}
            exchange_date={this.state.locale.exchange_date}
            PREA={this.state.locale.PREA}
            PREA_date={this.state.locale.PREA_date}
            c2c={this.state.locale.c2c}
            c2c_date={this.state.locale.c2c_date}
            European={this.state.locale.European}
            European_date={this.state.locale.European_date}
            app={this.state.locale.app}
            app_date={this.state.locale.app_date}
            sanr={this.state.locale.sanr}
            sanr_date={this.state.locale.sanr_date}
            twenty={this.state.locale.twenty}
            twenty_date={this.state.locale.twenty_date}
            cybereits={this.state.locale.cybereits}
            cybereits_date={this.state.locale.cybereits_date}
          />
          <Team
            id="team_intro"
            team_ceo_name={this.state.locale.team_ceo_name}
            team_ceo_intro={this.state.locale.team_ceo_intro}
          />
          <Investment
            id="early_investors"
            early_investors={this.state.locale.early_investors}
            institution_investors={this.state.locale.institution_investors}
            jiuhe={this.state.locale.jiuhe}
            jiuhe_intro={this.state.locale.jiuhe_intro}
            lixiaolai={this.state.locale.lixiaolai}
            lixiaolai_intro={this.state.locale.lixiaolai_intro}
            qidi={this.state.locale.qidi}
            qidi_intro={this.state.locale.qidi_intro}
            yingbiziben={this.state.locale.yingbiziben}
            yingbiziben_intro={this.state.locale.yingbiziben_intro}
            linkvc={this.state.locale.linkvc}
            linkvc_intro={this.state.locale.linkvc_intro}
            jiedianziben={this.state.locale.jiedianziben}
            jiedianziben_intro={this.state.locale.jiedianziben_intro}
          />
          <ProjectAdviser
            id="project_adviser"
            consultant_laomao_name={this.state.locale.consultant_laomao_name}
            consultant_laomao_intro={this.state.locale.consultant_laomao_intro}
            consultant_hmq_name={this.state.locale.consultant_hmq_name}
            consultant_hmq_intro={this.state.locale.consultant_hmq_intro}
            consultant_wyw_name={this.state.locale.consultant_wyw_name}
            consultant_wyw_intro={this.state.locale.consultant_wyw_intro}
            consultant_lf_name={this.state.locale.consultant_lf_name}
            consultant_lf_intro={this.state.locale.consultant_lf_intro}
            consultant_tgj_name={this.state.locale.consultant_tgj_name}
            consultant_tgj_intro={this.state.locale.consultant_tgj_intro}
            consultant_xiong_name={this.state.locale.consultant_xiong_name}
            consultant_xiong_intro={this.state.locale.consultant_xiong_intro}
          />
          <Consultant id="partners_adviser" />
          {/* <div id="cre_assignment" style={{ height: '1200px', backgroundColor: 'rgb(247, 251, 252)' }}>
            12
          </div> */}
          <footer className={styles.footer}>
            <div className={styles.footer_logo_container}>
              <a href="https://twitter.com/cybereits" target="blank">
                <Icon logo="twitter" className={styles.footer_logo} />
              </a>
              <a className={styles.wechart_a}>
                <Icon
                  logo="wechat"
                  className={styles.footer_logo}
                  // onMouseOver={() => {
                  //   console.log(1)
                  //   this.setState(({ showWechatQrcode }) => ({ showWechatQrcode: !showWechatQrcode }))
                  // }}
                  // onClick={() => { this.setState(({ showWechatQrcode }) => ({ showWechatQrcode: !showWechatQrcode })) }}
                />
                {/* {
                  this.state.showWechatQrcode
                    ? <Icon logo="qrcode" className={`${styles.footer_logo_wechat} animated fadeInUp`} style={{border: '1px solid rgb(56, 144, 230)'}} />
                    : null
                } */}
                <Icon logo="qrcode" className={`${styles.footer_logo_wechat} animated fadeInUp`} style={{border: '1px solid rgb(56, 144, 230)'}} />
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
