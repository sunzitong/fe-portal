import React from 'react'
import uuid from 'uuid/v4'
import { Icon } from 'antd'
import Scrollspy from 'react-scrollspy'
import { SmallTitleLogo } from '../components/TitleLogo'

import styles from './Header.less'

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bannerList: props.bannerList,
      activeItem: {
        href: '#intro',
      },
      buttonStatus: 'close',
    }
  }

  componentWillReceiveProps(props) {
    const newBannerList = props.bannerList.map((i) => {
      if (i.href === this.state.activeItem.href) {
        return { ...i, active: true }
      } else {
        return { ...i, active: false }
      }
    })
    this.setState({
      bannerList: newBannerList,
    })
  }

  bannerItemClick = (e, item) => {
    this.setState({
      activeItem: item,
    })
    const newBannerList = this.state.bannerList.map((i) => {
      if (i.href === item.href) {
        return { ...i, active: true }
      } else {
        return { ...i, active: false }
      }
    })
    this.setState({
      bannerList: newBannerList,
    })
  }

  switchLocale = (lan) => {
    const { switchLocale } = this.props
    switchLocale(lan)
  }

  switchMenu = () => {

  }

  render() {

    const { localeType } = this.props
    const { buttonStatus } = this.state
    return (
      <div className={`${styles.header_container} ${buttonStatus === 'open' ? styles.active : null}`}>
        <div className={styles.logoContainer}>
          <SmallTitleLogo className={styles.titleLogo} />
        </div>
        {/* <div className={styles.header_link_container}>
          {
            this.state.bannerList.map(item => (
              <a
                key={uuid()}
                href={item.href}
                className={`${styles.header_link_item} ${item.active ? styles.active : null}`}
                onClick={(e) => {
                  this.bannerItemClick(e, item)
                }}
              >
                {item.text}
              </a>
            ))
          }
        </div> */}
        <Scrollspy
          items={[
            'intro',
            'product_done',
            'token_value',
            'cre_assignment',
            'roadmap',
            'team_intro',
            'early_investors',
            'project_adviser',
            'partners_adviser',
          ]}
          currentClassName={styles.active}
          className={styles.header_link_container}
        >
          {
            this.state.bannerList.map(item => (
              <a
                key={uuid()}
                href={item.href}
                className={`${styles.header_link_item}`}
                onClick={(e) => {
                  this.bannerItemClick(e, item)
                }}
              >
                {item.text}
              </a>
            ))
          }
        </Scrollspy>
        <div className={styles.rightContainer}>
          <div className={styles.buttonContainer}>
            <Icon
              type={this.state.buttonStatus === 'open' ? 'close' : 'bars'}
              onClick={() => {
                if (this.state.buttonStatus === 'open') {
                  this.setState({
                    buttonStatus: 'close',
                  })
                  return
                }
                this.setState({
                  buttonStatus: 'open',
                })
              }}
            />
          </div>
          <div className={styles.language}>
            <a
              className={localeType === 'zh' ? styles.active : null}
              role="button"
              tabIndex="-1"
              onClick={() => {
                this.switchLocale('zh')
              }}>中文</a>
            /
            <a
              className={localeType === 'zh' ? null : styles.active}
              role="button"
              tabIndex="-1"
              onClick={() => {
                this.switchLocale('en')
              }}> English</a>
          </div>
        </div>
      </div>
    )
  }
}
