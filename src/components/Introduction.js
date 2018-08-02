import React from 'react'
import PropTypes from 'prop-types'
import enquire from 'enquire.js'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import Icon from '../components/Icon'
/*eslint-disable*/
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import styles from './Introduction.less'

console.log(enquire)
console.log()
export default class extends React.Component {

  static propTypes = {
    subTitle: PropTypes.string,
  }

  static defaultProps = {
    subTitle: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount() {
    const newThis = this;
    enquire.register('screen and (max-width:900px)', {
      // OPTIONAL
      // If supplied, triggered when a media query matches.
      match: function () {
        newThis.setState({
          isMobile: true,
        })
      },
      unmatch: function () {
        newThis.setState({
          isMobile: false,
        })
      },
      setup: function () {
        newThis.setState({
          isMobile: !!enquire.queries['screen and (max-width:900px)'].matches(),
        })
      }
    })
  }

  render() {
    const { id, intro_para_1_title, intro_para_1, intro_para_2_title, intro_para_2, intro_para_3_title, intro_para_3 } = this.props
    const { isMobile } = this.state

    console.log('debug', isMobile)

    const animType = {
      queue: isMobile ? 'bottom' : 'right',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div id={id} className={styles.full_container}>
        <div className={styles.container} id="key1">
          <div className={styles.title_container}>
            <h1 className={styles.title}>项目简介</h1>
            <p className={styles.en_title}>PROJECT INTRODUCTION</p>
          </div>
          <OverPack
            className={`${styles.content_container} ${isMobile ? styles.mobile : null}`}
            location="key1"
          >
            <TweenOne
              key="img"
              animation={animType.one}
              resetStyle
            >
              <Icon logo="3R" className={styles.pic} />
            </TweenOne>
            <QueueAnim
              key="text"
              type={animType.queue}
              leaveReverse
              ease={['easeOutCubic', 'easeInCubic']}
              className={`${styles.text_container} ${isMobile ? styles.mobile : null}`}
            >
              <h1 key="h1">{intro_para_1_title}</h1>
              <p key="p">{intro_para_1}</p>
            </QueueAnim>
          </OverPack>
        </div>
        <div className={styles.container} id="key2">
          <OverPack
            className={`${styles.content_container} ${isMobile ? styles.mobile : null}`}
            location="key2"
          >
            {
              isMobile ? <TweenOne
                key="img"
                animation={isMobile ? animType.one : { ...animType.one, x: '+=30' }}
                resetStyle
              >
                <Icon logo="digital" className={styles.pic} />
              </TweenOne> : <QueueAnim
                key="text"
                type={isMobile ? animType.queue : 'left'}
                leaveReverse
                ease={['easeOutCubic', 'easeInCubic']}
                className={`${styles.text_container} ${isMobile ? styles.mobile : null}`}
              >
                  <h1 key="h1">{intro_para_2_title}</h1>
                  <p key="p">{intro_para_2}</p>
                </QueueAnim>
            }
            {
              isMobile ? <QueueAnim
                key="text"
                type={isMobile ? animType.queue : 'left'}
                leaveReverse
                ease={['easeOutCubic', 'easeInCubic']}
                className={`${styles.text_container} ${isMobile ? styles.mobile : null}`}
              >
                <h1 key="h1">{intro_para_2_title}</h1>
                <p key="p">{intro_para_2}</p>
              </QueueAnim> : <TweenOne
                key="img"
                animation={isMobile ? animType.one : { ...animType.one, x: '+=30' }}
                resetStyle
              >
                  <Icon logo="digital" className={styles.pic} />
                </TweenOne>
            }
          </OverPack>
        </div>
        <div className={styles.container} id="key3">
          <OverPack
            className={`${styles.content_container} ${isMobile ? styles.mobile : null}`}
            location="key3"
          >
            <TweenOne
              key="img"
              animation={animType.one}
              resetStyle
            >
              <Icon logo="pay" className={styles.pic} />
            </TweenOne>
            <QueueAnim
              key="text"
              type={animType.queue}
              leaveReverse
              ease={['easeOutCubic', 'easeInCubic']}
              className={`${styles.text_container} ${isMobile ? styles.mobile : null}`}
            >
              <h1 key="h1">{intro_para_3_title}</h1>
              <p key="p">{intro_para_3}</p>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    )
  }
}
