import React from 'react'
import {
  // Row,
  Col,
} from 'antd'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import Icon from '../components/Icon'
import styles from './TokenValue.less'

const col = {
  lg: 6,
  sm: 12,
  xs: 24,
}

export default class TokenValue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { id, localeType, allocate_sub_title, allocate_para_1, allocate_para_2, allocate_para_3, allocate_para_4 } = this.props
    const animType = {
      queue: 'right',
    }
    return (
      <div className={styles.container} id={id}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Token价值</h1>
          <p className={styles.en_title}>TOKEN VALUE</p>
          <p className={styles.sub_title}>{allocate_sub_title}</p>
        </div>
        <div className={styles.centent_container} id="TokenValue">
          <OverPack
            location="TokenValue"
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
                  <Icon logo="share" className={styles.pic} />
                  <div className={styles.text}>
                    {
                      localeType === 'en' ? allocate_para_1 : <div>
                        购买平台的 <br /> 数字不动产份额
                      </div>
                    }
                  </div>
                </div>
              </Col>
              <Col {...col} key="assets">
                <div className={styles.pic_container}>
                  <Icon logo="buy-back" className={styles.pic} />
                  <div className={styles.text}>
                    {
                      localeType === 'en' ? allocate_para_2 : <div>
                        平台的50%净利润 <br /> 回购CRE进行销毁
                      </div>
                    }
                  </div>
                </div>
              </Col>
              <Col {...col} key="cover">
                <div className={styles.pic_container}>
                  <Icon logo="service-fee" className={styles.pic} />
                  <div className={styles.text}>
                    {
                      localeType === 'en' ? allocate_para_3 : <div>
                        支付平台<br />各类服务费
                      </div>
                    }
                  </div>
                </div>
              </Col>
              <Col {...col} key="user">
                <div className={styles.pic_container}>
                  <Icon logo="bonus" className={styles.pic} />
                  <div className={styles.text}>
                    {
                      localeType === 'en' ? allocate_para_4 : <div>
                        平台使用CRE <br />进行租金分红
                      </div>
                    }
                  </div>
                </div>
              </Col>
            </QueueAnim>
          </OverPack>
        </div>
        <div className={styles.arrow_container}>
          <Icon logo="arrow" className={styles.arrow} />
        </div>
      </div>
    )
  }
}
