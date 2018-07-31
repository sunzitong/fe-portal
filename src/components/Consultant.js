import React from 'react'
import {
  // Row,
  Col,
} from 'antd'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import styles from './Consultant.less'
import Icon from '../components/Icon'

const col = {
  lg: 6,
  sm: 12,
  xs: 24,
}

export default class Consultant extends React.Component {
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
          <h1 className={styles.title}>合作伙伴</h1>
          <p className={styles.en_title}>PROJECT CONSULTANT</p>
        </div>
        <div className={styles.centent_container} id="ProjectAdviser">
          <OverPack
            location="ProjectAdviser"
          >
            <QueueAnim
              key="text"
              type={animType.queue}
              leaveReverse
              ease={['easeOutCubic', 'easeInCubic']}
              className={`${styles.row} ant-row`}
            >
              <Col {...col} key="logo-01">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-01" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-02">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-02" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-03">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-03" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-04">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-04" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-05">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-05" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-06">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-06" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-07">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-07" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-08">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-08" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-09">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-09" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-10">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-10" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-11">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-11" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-12">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-12" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-13">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-13" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-14">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-14" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-15">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-15" className={styles.pic} />
                  </div>
                </div>
              </Col>
              <Col {...col} key="logo-16">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="logo-16" className={styles.pic} />
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
