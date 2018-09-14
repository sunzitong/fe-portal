import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/Icon'
import Subscribe from '../components/Subscribe'
import styles from './FirstBlock.less'

export default class extends React.Component {

  static propTypes = {
    subTitle: PropTypes.string,
  }

  static defaultProps = {
    subTitle: '',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { title, subTitle, id, whitepaper, subscribe, placeholder } = this.props
    return (
      <div className={styles.container} id={id}>
        <div className={styles.logo_container}>
          <Icon logo="logo-big" className={styles.logo} />
        </div>
        <div className={styles.title_container}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.sub_title}>{subTitle}</h2>
        </div>
        <Subscribe
          subscribe={subscribe}
          placeholder={placeholder}
        />
        <div className={styles.whitepaper_container}>
          <div className={styles.whitepaper_button_container}>
            <Icon logo="white-paper" />
            <div
              className={styles.button_text}
              role="button"
              tabIndex="-1"
              onClick={() => {
                let locale = window.localStorage.getItem('__locale') || 'zh'
                window.open(`https://static.cybereits.cn/static/docs/${locale === 'zh' ? 'CYBEREITS_White_Paper_v1.3.0.pdf' : 'CYBEREITS_White_Paper_EN_v1.2.0.pdf'}`)
              }}
            >{whitepaper}</div>
          </div>
        </div>
      </div>
    )
  }
}
