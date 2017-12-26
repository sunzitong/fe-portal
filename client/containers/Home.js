import React from 'react'
import { connect } from 'react-redux'

import i18n from '../i18n'

import { alert, confirm } from '../actions/dialog'

import { SmallTitleLogo } from '../components/TitleLogo'
import Icon from '../components/Icon'

import styles from './Home.scss'
import pageStyles from './Page.scss'

const Header = ({ text, anchor, actived, ...rest }) => (
  <a href={`#${anchor}`} className={`${styles.headerLink} ${actived ? styles.actived : ''}`} {...rest}>
    <li>
      {text}
    </li>
  </a>
)

const AchievementLogo = ({ index, text }) => (
  <div className={styles.achievement_logo_container}>
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
    <img
      alt=""
      src={`images/${img}.png`}
      className={styles.investor_avatar}
    />
    <div className={styles.investor_name}>{title}</div>
    <div className="label">{content}</div>
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

const Community = ({ img }) => (
  <img
    alt=""
    src={`images/${img}.png`}
    className={styles.community_logo}
  />
)

const downloadWhitePaper = () => {
  window.open(`${window.location.origin}/docs/CYBEREITS_White_Paper_v1.1.0.pdf`, 'blank')
}

const mapDispatchToProps = { alert, confirm }

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
      activedNav: 'token_sale',
    }
    this.switchLocale = this.switchLocale.bind(this)
  }

  componentDidMount() {
    var container = document.getElementById('globeContainer')
    if (container.style.display !== 'none') {
      var globe = new window.DAT.Globe(container)
      globe.createPoints()
      globe.animate()
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

  render() {
    return (
      <div className="container bg-darkblue fore-white" style={{ position: 'relative' }}>
        <header className={styles.header}>
          <SmallTitleLogo className={styles.titleLogo} />
          <ul className={styles.navHeader}>
            <Header actived={this.state.activedNav === 'token_sale'} text={this.state.locale.token_sale} anchor="token_sale" onClick={() => this.setState({ activedNav: 'token_sale' })} />
            <Header actived={this.state.activedNav === 'intro'} text={this.state.locale.intro} anchor="intro" onClick={() => this.setState({ activedNav: 'intro' })} />
            <Header actived={this.state.activedNav === 'achievement'} text={this.state.locale.achievement} anchor="achievement" onClick={() => this.setState({ activedNav: 'achievement' })} />
            <Header actived={this.state.activedNav === 'allocate'} text={this.state.locale.allocate} anchor="allocate" onClick={() => this.setState({ activedNav: 'allocate' })} />
            <Header actived={this.state.activedNav === 'roadmap'} text={this.state.locale.roadmap} anchor="roadmap" onClick={() => this.setState({ activedNav: 'roadmap' })} />
            <Header actived={this.state.activedNav === 'team'} text={this.state.locale.team} anchor="team" onClick={() => this.setState({ activedNav: 'team' })} />
            <Header actived={this.state.activedNav === 'whitepaper'} text={this.state.locale.whitepaper} anchor="whitepaper" onClick={() => this.setState({ activedNav: 'whitepaper' })} />
            <Header actived={this.state.activedNav === 'community'} text={this.state.locale.community} anchor="community" onClick={() => this.setState({ activedNav: 'community' })} />
          </ul>
          <div className={styles.i18n}>
            <a
              tabIndex={-1}
              role="button"
              className={this.state.localeType === 'zh' ? styles.fore_lightblue : ''}
              onClick={() => this.switchLocale('zh')}
            >中文</a>
            {/* <a
              tabIndex={-1}
              role="button"
              className={this.state.localeType === 'en' ? styles.fore_lightblue : ''}
              onClick={() => this.switchLocale('en')}
            >English</a> */}
          </div>
        </header>
        <div className={styles.content}>
          <section id="token_sale" className={styles.token_sale}>
            <Icon logo="primary-logo" className={styles.primaryLogo} />
            <h1 className="text-center">{this.state.locale.primary_title}</h1>
            <div className={styles.sub_title}>{this.state.locale.sub_title}</div>
            <div className={styles.sec_title}>{this.state.locale.comming_soon}</div>
            <div
              role="button"
              tabIndex={0}
              className={styles.whitepaper_button}
              onClick={downloadWhitePaper}
            >
              <Icon logo="white-paper-small" className={styles.whitepaper_icon} />{this.state.locale.whitepaper}
            </div>
          </section>
          <div id="globeContainer" className={styles.globe} />
          <div className={styles.seperator} />
          <section id="intro" className={styles.intro}>
            <p className="text-center large">{this.state.locale.intro}</p>
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
            <p className="text-center large">{this.state.locale.achievement}</p>
            <div className={styles.sec_title}>{this.state.locale.achiev_sub_title}</div>
            <div className={styles.achievement_grid}>
              <AchievementLogo index="01" text={this.state.locale.achiev_para_1} />
              <AchievementLogo index="02" text={this.state.locale.achiev_para_2} />
              <AchievementLogo index="03" text={this.state.locale.achiev_para_3} />
            </div>
            <div className={styles.achievement_grid}>
              <AchievementLogo index="04" text={this.state.locale.achiev_para_4} />
              <AchievementLogo index="05" text={this.state.locale.achiev_para_5} />
              <AchievementLogo index="06" text={this.state.locale.achiev_para_6} />
            </div>
          </section>
          <div className={styles.seperator} />
          <section id="allocate" className={styles.allocate}>
            <p className="text-center large">{this.state.locale.allocate}</p>
            <div className={styles.sec_title} style={{ fontSize: '1.3rem' }}>{this.state.locale.allocate_sub_title}</div>
            <div className={styles.cre_container}>
              <img
                alt=""
                src="/images/cre.png"
                className={styles.cre_logo}
              />
              <div
                style={{ position: 'absolute', top: '22px', left: '147px' }}
              >{this.state.locale.allocate_para_1}</div>
              <div
                style={{ position: 'absolute', top: '26px', right: '66px' }}
              >{this.state.locale.allocate_para_2}</div>
              <div
                style={{ position: 'absolute', bottom: '24px', left: '182px' }}
              >{this.state.locale.allocate_para_3}</div>
              <div
                style={{ position: 'absolute', bottom: '23px', right: '133px' }}
              >{this.state.locale.allocate_para_4}</div>
            </div>
            <div className="dis-flex">
              <img
                alt=""
                src="/images/token-allocate.png"
                className={styles.allocate_img}
              />
              <img
                alt=""
                src="/images/money-allocate.png"
                className={styles.allocate_img}
              />
            </div>
          </section>
          <section id="roadmap" className={styles.roadmap}>
            <p className="text-center large">{this.state.locale.roadmap}</p>
            <img
              alt=""
              src="/images/roadmap.png"
              style={{
                width: '98%',
              }}
            />
          </section>
          <section id="team" className={styles.team}>
            <p className="text-center large">{this.state.locale.team}</p>
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
          </section>
          <section id="investors" className={styles.investors}>
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
          </section>
          <section id="institution" className={styles.investors}>
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
          </section>
          <section id="consultant" className={styles.consultant}>
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
          <section id="whitepaper" className={styles.whitepaper}>
            <p className="text-center large">{this.state.locale.whitepaper}</p>
            <li className={styles.book}>
              <figure className={pageStyles.book}>
                <ul className={pageStyles.hardcover_front}>
                  <li>
                    <div
                      className={pageStyles.coverDesign}
                      style={{
                        backgroundImage: 'url(/images/white-paper-cover.png)',
                      }}
                    >
                      <span className={pageStyles.ribbon}>v1.1</span>
                    </div>
                  </li>
                  <li />
                </ul>
                <ul className={pageStyles.page}>
                  <li />
                  <li className="text-center">
                    <a
                      className={pageStyles.btn}
                      href="docs/CYBEREITS_White_Paper_v1.1.0.pdf"
                      target="_blank"
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
            </li>
          </section>
          <section id="community" className={styles.community}>
            <p className="text-center large m-b-3rem">{this.state.locale.partner}</p>
            <div className="dis-flex">
              <Community img="bigone" />
              <Community img="gongxinbao" />
              <Community img="xstar" />
              <Community img="jingtong" />
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
            <a href="mailto:info@mail.cybereits.com">
              <Icon logo="mail" className={styles.footer_logo} />
            </a>
          </div>
          <div className="text-center fore-gray small">
            Copyright © 2017 Cybereits - All Rights Reserved
          </div>
        </footer>
      </div>
    )
  }
}
