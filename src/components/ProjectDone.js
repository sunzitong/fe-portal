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
    const { id } = this.props
    const animType = {
      queue: 'bottom',
    }
    return (
      <div className={styles.container} id={id}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>项目落地</h1>
          <p className={styles.en_title}>MVP RESULTS</p>
          <p className={styles.sub_title}>中国试点项目运行一年取得的成果</p>
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
                  <Icon logo="run-time" className={styles.pic} />
                  <div className={styles.text}>
                    平台运行时间
                  </div>
                </div>
              </Col>
              <Col {...col} key="assets">
                <div className={styles.pic_container}>
                  <Icon logo="assets" className={styles.pic} />
                  <div className={styles.text}>
                    管理资产规模
                  </div>
                </div>
              </Col>
              <Col {...col} key="cover">
                <div className={styles.pic_container}>
                  <Icon logo="cover" className={styles.pic} />
                  <div className={styles.text}>
                    业务覆盖范围
                  </div>
                </div>
              </Col>
              <Col {...col} key="user">
                <div className={styles.pic_container}>
                  <Icon logo="user" className={styles.pic} />
                  <div className={styles.text}>
                    累计注册用户
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade-count">
                <div className={styles.pic_container}>
                  <Icon logo="trade-count" className={styles.pic} />
                  <div className={styles.text}>
                    累计交易次数
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade">
                <div className={styles.pic_container}>
                  <Icon logo="trade" className={styles.pic} />
                  <div className={styles.text}>
                    平台交易规模
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

