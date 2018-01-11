import React from 'react'
import { connect } from 'react-redux'
import Scrollspy from 'react-scrollspy'
import { Dialog } from 'material-ui'
import { Tooltip, PieChart, Pie, Legend } from 'recharts'

import i18n from '../i18n'

import { alert, confirm } from '../actions/dialog'

import { SmallTitleLogo } from '../components/TitleLogo'
import Icon from '../components/Icon'

import styles from './Home.scss'
import pageStyles from './Page.scss'
import { downloadPPT, downloadWhitePaper } from '../common/resource'
import PublicWhitelistRegStage from './PublicWhitelistRegStage'

const {
  officialEmail,
  saleEndFormatTime,
  saleEnded,
} = window.__INIT_STATE

const AchievementLogo = ({ index, text, className = '' }) => (
  <div className={`animated ${styles.achievement_logo_container} ${className}`}>
    <Icon logo={`acv-${index}`} className={styles.achievement_logo} />
    <div className="text-center big m-t-10 m-b-10">{text}</div>
  </div>
)

const TeamMember = ({ img, title, content }) => (
  <div className={styles.team_member_container}>
    <img
      alt=""
      src={`images/${img}.png`}
      className={styles.team_avatar}
    />
    <div style={{ margin: '.8rem auto', fontSize: '1.2rem' }}>{title}</div>
    <div className="label">{content}</div>
  </div>
)

const Investor = ({ img, title, content }) => (
  <div className={styles.investor_container}>
    <div className={styles.investor_avatar_container}>
      <img
        alt=""
        src={`images/${img}.png`}
        className={styles.investor_avatar}
      />
    </div>
    <div className={styles.investor_name}>{title}</div>
    <div className={styles.investor_info}>{content}</div>
  </div>
)

const Consultant = ({ img, title, content }) => (
  <div className={styles.consultant_container}>
    <img
      alt=""
      src={`images/${img}.png`}
      className={styles.consultant_avatar}
    />
    <div className={styles.consultant_name}>{title}</div>
    <div>{content}</div>
  </div>
)

const Partners = ({ img }) => (
  <img
    alt=""
    src={`images/${img}.png`}
    className={styles.community_logo}
  />
)

const mapDispatchToProps = { alert, confirm }
const saleEndDateTime = new Date(saleEndFormatTime)

@connect(null, mapDispatchToProps)
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
      saleEnded: saleEnded,
      whitelistDisabled: false,
    }
    this.switchLocale = this.switchLocale.bind(this)
    this.goToWhiteList = this.goToWhiteList.bind(this)
  }

  componentDidMount() {
    if (window.__INIT_STATE.dev !== 'true') {
      window.particlesJS.load('home-container', 'plugin/particles.json')
    }
    if (!this.state.whitelistDisabled) {
      if (!this.state.saleEnded) {
        window
          .jQuery('#countdown')
          .countdown({
            image: '/images/digits.png',
            endTime: saleEndDateTime,
            timerEnd: () => {
              this.setState({
                saleEnded: true,
              })
            },
          })
      }
    }
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
      <div id="home-container" className="container fore-white" style={{ position: 'relative', backgroundColor: this.state.containerBg, transition: 'background-color .8s ease' }}>
        <Dialog
          open={this.state.openWhitelist}
          autoScrollBodyContent
          contentStyle={{ width: '100%', maxWidth: '41rem' }}
        >
          <Icon
            tabIndex={0}
            role="button"
            logo="close"
            style={{
              position: 'absolute',
              top: '.4rem',
              right: '.4rem',
              cursor: 'pointer',
              zIndex: '100',
            }}
            onClick={() => this.setState({ openWhitelist: false })}
          />
          <div className={styles.dialogContainer}>
            <PublicWhitelistRegStage />
          </div>
        </Dialog>
        <SmallTitleLogo className={styles.titleLogo} />
        <div className={styles.body}>
          <div className={styles.decoration}>
            <svg xmlns="http://www.w3.org/2000/svg" width="846" height="846" viewBox="0 0 846 846" className={styles.outerCircle}>
              <circle
                cx="720.117"
                cy="451.117"
                r="420.867"
                fill="none"
                fillRule="evenodd"
                stroke="#656be8"
                strokeDasharray="2,40"
                strokeWidth="3.5"
                opacity=".5"
                transform="rotate(4 972.525 -3815.366)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="804" height="804" viewBox="0 0 804 804" className={styles.innerCircle}>
              <circle
                cx="720.117"
                cy="451.117"
                r="395.617"
                fill="none"
                fillRule="evenodd"
                stroke="#656be8"
                strokeDasharray="2,20"
                strokeOpacity=".329"
                strokeWidth="11.5"
                opacity=".7"
                transform="translate(-318 -49)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="656" height="656" viewBox="0 0 656 656">
              <circle
                cx="721"
                cy="452"
                r="327"
                fill="none"
                fillRule="evenodd"
                stroke="#505a58"
                strokeWidth=".4"
                transform="translate(-393 -124)"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="545" height="545" viewBox="0 0 545 545">
              <circle
                cx="720.5"
                cy="451.5"
                r="271.5"
                fill="none"
                fillRule="evenodd"
                stroke="#3c3f3e"
                strokeWidth=".4"
                transform="translate(-448 -179)" />
            </svg>
          </div>
          <div className={styles.content}>
            <section id="token_sale" className={styles.token_sale}>
              <Icon logo="primary-logo" className={styles.primaryLogo} />
              <h1 className="text-center">{this.state.locale.primary_title}</h1>
              <div className={styles.sub_title}>{this.state.locale.sub_title}</div>
              <div className={styles.sec_title} style={{ margin: '4rem auto' }}>
                {
                  this.state.saleEnded
                    ? this.state.locale.saleEnded
                    : !this.state.whitelistDisabled
                      ? this.state.locale.endCountdown
                      : this.state.locale.countdown
                }
              </div>
              {
                this.state.saleEnded || this.state.whitelistDisabled
                  ? null
                  : <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div id="countdown" className={`dis-flex ${styles.countdown}`} />
                  </div>
              }
              {
                !this.state.whitelistDisabled && !this.state.saleEnded
                  ? <div>
                    <a
                      className={styles.whitepaper_button}
                      href="/pwl"
                    >
                      {this.state.locale.request_to_invest}
                    </a>
                    <div className="label text-center fore-lightness">{this.state.locale.invest_warning}</div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={downloadWhitePaper}
                      className="dis-flex"
                      style={{
                        cursor: 'pointer',
                        margin: '4rem auto',
                        width: '6rem',
                        fontSize: '.8rem',
                        textDecoration: 'underline',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon logo="white-paper-small" className={styles.whitepaper_icon} />{this.state.locale.whitepaper}
                    </div>
                  </div>
                  : <div
                    tabIndex={0}
                    role="button"
                    className={styles.whitepaper_button}
                    style={{
                      margin: '8rem auto',
                    }}
                    onClick={downloadWhitePaper}
                  >
                    <Icon logo="white-paper-small" className={styles.whitepaper_icon} />{this.state.locale.whitepaper}
                  </div>
              }
            </section>
            <div className={styles.seperator} />
            <section id="intro" className={styles.intro}>
              <p className="text-center large m-b-3rem">{this.state.locale.intro}</p>
              <ul>
                <li className={styles.intro_block}>
                  <img
                    src="/images/intro_01.png"
                    alt=""
                    className={styles.intro_img}
                  />
                  <div className={styles.intro_param}>{this.state.locale.intro_para_1}</div>
                </li>
                <li className={styles.intro_block}>
                  <div className={styles.intro_param}>{this.state.locale.intro_para_2}</div>
                  <img
                    src="/images/intro_02.png"
                    alt=""
                    className={styles.intro_img}
                  />
                </li>
                <li className={styles.intro_block}>
                  <img
                    src="/images/intro_03.png"
                    alt=""
                    className={styles.intro_img}
                  />
                  <div className={styles.intro_param}>{this.state.locale.intro_para_3}</div>
                </li>
              </ul>
            </section>
            <div className={styles.seperator} />
            <section id="achievement" className={styles.achievement}>
              <p className="text-center large m-b-3rem">{this.state.locale.achievement}</p>
              <div className={styles.sec_title}>{this.state.locale.achiev_sub_title}</div>
              <div className={styles.achievement_grid}>
                <AchievementLogo index={`01-${this.state.locale === i18n.en ? 'en' : 'zh'}`} text={this.state.locale.achiev_para_1} className={this.state.locale === i18n.en ? 'flipInY' : 'flipInX'} />
                <AchievementLogo index={`02-${this.state.locale === i18n.en ? 'en' : 'zh'}`} text={this.state.locale.achiev_para_2} className={this.state.locale === i18n.en ? 'flipInY' : 'flipInX'} />
                <AchievementLogo index={`03-${this.state.locale === i18n.en ? 'en' : 'zh'}`} text={this.state.locale.achiev_para_3} className={this.state.locale === i18n.en ? 'flipInY' : 'flipInX'} />
              </div>
              <div className={styles.achievement_grid}>
                <AchievementLogo index={`04-${this.state.locale === i18n.en ? 'en' : 'zh'}`} text={this.state.locale.achiev_para_4} className={this.state.locale === i18n.en ? 'flipInY' : 'flipInX'} />
                <AchievementLogo index={`05-${this.state.locale === i18n.en ? 'en' : 'zh'}`} text={this.state.locale.achiev_para_5} className={this.state.locale === i18n.en ? 'flipInY' : 'flipInX'} />
                <AchievementLogo index={`06-${this.state.locale === i18n.en ? 'en' : 'zh'}`} text={this.state.locale.achiev_para_6} className={this.state.locale === i18n.en ? 'flipInY' : 'flipInX'} />
              </div>
            </section>
            <div className={styles.seperator} />
            <section id="allocate" className={styles.allocate}>
              <p className="text-center large m-b-3rem">{this.state.locale.allocate}</p>
              <div className={styles.sec_title} style={{ fontSize: '1.3rem' }}>{this.state.locale.allocate_sub_title}</div>
              <div className={styles.cre_container}>
                <img
                  alt=""
                  src="/images/cre.png"
                  className={styles.cre_logo}
                />
                <div
                  className={styles.allocate_span}
                  style={{
                    textAlign: 'right',
                    top: '22px',
                    left: '117px',
                  }}
                >{this.state.locale.allocate_para_1}</div>
                <div
                  className={styles.allocate_span}
                  style={{
                    top: '22px',
                    right: '115px',
                  }}
                >{this.state.locale.allocate_para_2}</div>
                <div
                  className={styles.allocate_span}
                  style={{
                    textAlign: 'right',
                    top: '161px',
                    left: '122px',
                  }}
                >{this.state.locale.allocate_para_3}</div>
                <div
                  className={styles.allocate_span}
                  style={{
                    top: '160px',
                    right: '113px',
                  }}
                >{this.state.locale.allocate_para_4}</div>
              </div>
              <div className="dis-flex">
                <div className={styles.allocate_img}>
                  <h2>{this.state.locale.token_allocate}</h2>
                  <PieChart width={240} height={240}>
                    <Tooltip />
                    <Pie
                      data={[
                        {
                          name: this.state.locale.allocate_token_sale,
                          value: 40,
                          fill: '#65d6e6',
                        },
                        {
                          name: this.state.locale.allocate_community,
                          value: 4,
                          fill: '#e496f3',
                        },
                        {
                          name: this.state.locale.allocate_early_investor,
                          value: 8,
                          fill: '#de7db9',
                        },
                        {
                          name: this.state.locale.allocate_business,
                          value: 10,
                          fill: '#a961b7',
                        },
                        {
                          name: this.state.locale.allocate_org_investor,
                          value: 16,
                          fill: '#8872e6',
                        },
                        {
                          name: this.state.locale.allocate_team,
                          value: 22,
                          fill: '#9abcfc',
                        },
                      ]}
                      dataKey="value"
                      innerRadius={'90%'}
                      outerRadius={'100%'}
                    />
                    <Legend
                      align="center"
                      verticalAlign="middle"
                      layout="vertical"
                      wrapperStyle={{ fontSize: '.8rem' }}
                    />
                  </PieChart>
                </div>
                <div className={styles.allocate_img}>
                  <h2>{this.state.locale.fund_allocate}</h2>
                  <PieChart width={240} height={240}>
                    <Tooltip />
                    <Pie
                      data={[
                        {
                          name: this.state.locale.market,
                          value: 54,
                          fill: '#65d6e6',
                        },
                        {
                          name: this.state.locale.other,
                          value: 5,
                          fill: '#e496f3',
                        },
                        {
                          name: this.state.locale.operation,
                          value: 9,
                          fill: '#de7db9',
                        },
                        {
                          name: this.state.locale.risk_management,
                          value: 9,
                          fill: '#a961b7',
                        },
                        {
                          name: this.state.locale.development,
                          value: 23,
                          fill: '#8872e6',
                        },
                      ]}
                      dataKey="value"
                      innerRadius={'90%'}
                      outerRadius={'100%'}
                    />
                    <Legend
                      align="center"
                      verticalAlign="middle"
                      layout="vertical"
                      wrapperStyle={{ fontSize: '.8rem' }}
                    />
                  </PieChart>
                </div>
              </div>
            </section>
            <section id="roadmap" className={styles.roadmap}>
              <p className="text-center large m-b-3rem">{this.state.locale.roadmap}</p>
              <img
                alt=""
                src="/images/roadmap.png"
                style={{
                  width: '98%',
                }}
              />
            </section>
            <section id="team" className={styles.team}>
              <p className="text-center large m-b-3rem">{this.state.locale.team}</p>
              <div className="dis-flex">
                <TeamMember
                  img="tanbochao"
                  title={this.state.locale.team_ceo_name}
                  content={this.state.locale.team_ceo_intro}
                />
                <TeamMember
                  img="xuyang"
                  title={this.state.locale.team_cto_name}
                  content={this.state.locale.team_cto_intro}
                />
                <TeamMember
                  img="haojinyi"
                  title={this.state.locale.team_coo_name}
                  content={this.state.locale.team_coo_intro}
                />
                <TeamMember
                  img="chendonghao"
                  title={this.state.locale.team_cmo_name}
                  content={this.state.locale.team_cmo_intro}
                />
              </div>
              <p className="text-center large m-b-3rem">{this.state.locale.early_investors}</p>
              <div className="dis-flex">
                <Investor
                  img="jiuhe"
                  title={this.state.locale.jiuhe}
                  content={this.state.locale.jiuhe_intro}
                />
                <Investor
                  img="lixiaolai"
                  title={this.state.locale.lixiaolai}
                  content={this.state.locale.lixiaolai_intro}
                />
                <Investor
                  img="qidi"
                  title={this.state.locale.qidi}
                  content={this.state.locale.qidi_intro}
                />
              </div>
              <p className="text-center large m-b-3rem">{this.state.locale.institution_investors}</p>
              <div className="dis-flex">
                <Investor
                  img="yingbiziben"
                  title={this.state.locale.yingbiziben}
                  content={this.state.locale.yingbiziben_intro}
                />
                <Investor
                  img="linkvc"
                  title={this.state.locale.linkvc}
                  content={this.state.locale.linkvc_intro}
                />
                <Investor
                  img="jiedianziben"
                  title={this.state.locale.jiedianziben}
                  content={this.state.locale.jiedianziben_intro}
                />
              </div>
              <p className="text-center large m-b-3rem">{this.state.locale.consultant}</p>
              <div className="dis-flex">
                <Consultant
                  img="laomao"
                  title={this.state.locale.consultant_laomao_name}
                  content={this.state.locale.consultant_laomao_intro}
                />
                <Consultant
                  img="huangminqiang"
                  title={this.state.locale.consultant_hmq_name}
                  content={this.state.locale.consultant_hmq_intro}
                />
                <Consultant
                  img="wuyuanwen"
                  title={this.state.locale.consultant_wyw_name}
                  content={this.state.locale.consultant_wyw_intro}
                />
              </div>
              <div className="dis-flex">
                <Consultant
                  img="lifeng"
                  title={this.state.locale.consultant_lf_name}
                  content={this.state.locale.consultant_lf_intro}
                />
                <Consultant
                  img="tuguojun"
                  title={this.state.locale.consultant_tgj_name}
                  content={this.state.locale.consultant_tgj_intro}
                />
                <Consultant
                  img="xiong"
                  title={this.state.locale.consultant_xiong_name}
                  content={this.state.locale.consultant_xiong_intro}
                />
              </div>
            </section>
            <section id="document" className={styles.whitepaper}>
              <p className="text-center large m-b-3rem">{this.state.locale.document}</p>
              <div className="dis-flex">
                <div className={styles.book}>
                  <figure className={pageStyles.book}>
                    <ul className={pageStyles.hardcover_front}>
                      <li>
                        <div
                          className={pageStyles.coverDesign}
                          style={{
                            backgroundImage: 'url(/images/white-paper-cover-01.jpg)',
                          }}
                        >
                          <span className={pageStyles.ribbon}>v1.2</span>
                          <p>{this.state.locale.whitepaper}</p>
                        </div>
                      </li>
                      <li />
                    </ul>
                    <ul className={pageStyles.page}>
                      <li />
                      <li className="text-center">
                        <a
                          tabIndex={0}
                          role="button"
                          className={pageStyles.btn}
                          onClick={() => downloadWhitePaper()}
                        >Download</a>
                      </li>
                      <li />
                      <li />
                      <li />
                    </ul>
                    <ul className={pageStyles.hardcover_back}>
                      <li />
                      <li />
                    </ul>
                    <ul className={pageStyles.book_spine}>
                      <li />
                      <li />
                    </ul>
                  </figure>
                </div>
                <div className={styles.book}>
                  <figure className={pageStyles.book}>
                    <ul className={pageStyles.hardcover_front}>
                      <li>
                        <div
                          className={pageStyles.coverDesign}
                          style={{
                            backgroundImage: 'url(/images/ppt-cover-01.jpg)',
                          }}
                        >
                          <p>PPT</p>
                        </div>
                      </li>
                      <li />
                    </ul>
                    <ul className={pageStyles.page}>
                      <li />
                      <li className="text-center">
                        <a
                          tabIndex={0}
                          role="button"
                          className={pageStyles.btn}
                          onClick={() => downloadPPT()}
                        >Download</a>
                      </li>
                      <li />
                      <li />
                      <li />
                    </ul>
                    <ul className={pageStyles.hardcover_back}>
                      <li />
                      <li />
                    </ul>
                    <ul className={pageStyles.book_spine}>
                      <li />
                      <li />
                    </ul>
                  </figure>
                </div>
              </div>
            </section>
            <section id="partners" className={styles.partners}>
              <p className="text-center large m-b-3rem">{this.state.locale.partner}</p>
              <div className="dis-flex">
                <Partners img="bigone" />
                <Partners img="gongxinbao" />
              </div>
              <div className="dis-flex">
                <Partners img="xstar" />
                <Partners img="jingtong" />
              </div>
              <p className="text-center large m-b-3rem">{this.state.locale.media}</p>
              <div className="dis-flex">
                <Partners img="babicaijing" />
                <Partners img="jinsecaijing" />
                <Partners img="babite" />
              </div>
            </section>
          </div>
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
                    ? <Icon logo="qrcode" className={`${styles.footer_logo_wechat} animated fadeInUp`} />
                    : null
                }
              </a>
              <a href="https://t.me/joinchat/HJivSA3RRwBtzkXvoqDHeA" target="blank">
                <Icon logo="telegram" className={styles.footer_logo} />
              </a>
              <a href={`mailto:${officialEmail}`}>
                <Icon logo="mail" className={styles.footer_logo} />
              </a>
            </div>
            <div className="text-center fore-gray small">
              Copyright © 2017 Cybereits - All Rights Reserved
            </div>
          </footer>
        </div>
        <header className={styles.header}>
          <Scrollspy
            items={[
              'token_sale',
              'intro',
              'achievement',
              'allocate',
              'roadmap',
              'team',
              'document',
              'partners',
            ]}
            currentClassName={styles.actived}
            className={styles.navHeader}
            rootEl={`.${styles.body}`}
          >
            <li className={styles.headerLink}>
              <a href="#token_sale" >
                {this.state.locale.token_sale}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#intro" >
                {this.state.locale.intro}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#achievement" >
                {this.state.locale.achievement}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#allocate" >
                {this.state.locale.allocate}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#roadmap" >
                {this.state.locale.roadmap}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#team" >
                {this.state.locale.team}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#document" >
                {this.state.locale.document}
              </a>
            </li>
            <li className={styles.headerLink}>
              <a href="#partners" >
                {this.state.locale.partners}
              </a>
            </li>
          </Scrollspy>
          <div className={styles.i18n}>
            <a
              tabIndex={-1}
              role="button"
              className={this.state.localeType === 'zh' ? styles.fore_lightblue : ''}
              onClick={() => this.switchLocale('zh')}
            >中文</a>
            <a
              tabIndex={-1}
              role="button"
              className={this.state.localeType === 'en' ? styles.fore_lightblue : ''}
              onClick={() => this.switchLocale('en')}
            >English</a>
          </div>
        </header>
      </div>
    )
  }
}
