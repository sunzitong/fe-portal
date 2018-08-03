import React from 'react'
import {
  // Row,
  Col,
} from 'antd'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import Icon from '../components/Icon'
import styles from './ProjectDone.less'

const col = {
  lg: 8,
  sm: 12,
  xs: 24,
}

export default class ProjectDone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { id, achiev_sub_title, achiev_para_1, achiev_para_2, achiev_para_3, achiev_para_4, achiev_para_5, achiev_para_6, localeType } = this.props
    const animType = {
      queue: 'bottom',
    }
    return (
      <div className={styles.container} id={id}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>项目落地</h1>
          <p className={styles.en_title}>MVP RESULTS</p>
          <p className={styles.sub_title}>{achiev_sub_title}</p>
        </div>
        <div className={styles.centent_container} id="ProjectDone">
          <OverPack
            location="ProjectDone"
          >
            <QueueAnim
              key="text"
              type={animType.queue}
              leaveReverse
              ease={['easeOutCubic', 'easeInCubic']}
              className={`${styles.row} ant-row`}
            >
              <Col {...col} key="run-time">
                <div className={styles.pic_container}>
                  <Icon logo={localeType === 'en' ? 'run-time-en' : 'run-time'} className={styles.pic} />
                  <div className={styles.text}>
                    {achiev_para_1}
                  </div>
                </div>
              </Col>
              <Col {...col} key="assets">
                <div className={styles.pic_container}>
                  <Icon logo={localeType === 'en' ? 'assets-en' : 'assets'} className={styles.pic} />
                  <div className={styles.text}>
                    {achiev_para_2}
                  </div>
                </div>
              </Col>
              <Col {...col} key="cover">
                <div className={styles.pic_container}>
                  <Icon logo={localeType === 'en' ? 'cover-en' : 'cover'} className={styles.pic} />
                  <div className={styles.text}>
                    {achiev_para_3}
                  </div>
                </div>
              </Col>
              <Col {...col} key="user">
                <div className={styles.pic_container}>
                  <Icon logo="user" className={styles.pic} />
                  <div className={styles.text}>
                    {achiev_para_4}
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade-count">
                <div className={styles.pic_container}>
                  <Icon logo="trade-count" className={styles.pic} />
                  <div className={styles.text}>
                    {achiev_para_5}
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade">
                <div className={styles.pic_container}>
                  <Icon logo={localeType === 'en' ? 'trade-en' : 'trade'} className={styles.pic} />
                  <div className={styles.text}>
                    {achiev_para_6}
                  </div>
                </div>
              </Col>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    )
  }
}

