import {
  // Row,
  Col,
} from 'antd'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import Icon from '../components/Icon'
import styles from './ProjectAdviser.less'

const col = {
  lg: 8,
  sm: 12,
  xs: 24,
}

export default class ProjectAdviser extends React.Component {
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
          <h1 className={styles.title}>项目顾问</h1>
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
              <Col {...col} key="run-time">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header1" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    老猫
                  </div>
                  <div className={styles.sub_text}>
                    inblockchain负责人
                  </div>
                </div>
              </Col>
              <Col {...col} key="assets">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header2" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    黄敏强
                  </div>
                  <div className={styles.sub_text}>
                    公信宝CEO
                  </div>
                </div>
              </Col>
              <Col {...col} key="cover">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header2" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    武源文
                  </div>
                  <div className={styles.sub_text}>
                    井通科技CEO
                  </div>
                </div>
              </Col>
              <Col {...col} key="user">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header4" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    李丰
                  </div>
                  <div className={styles.sub_text}>
                    世界第一个Litecoin ASIC矿工
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade-count">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header5" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    涂国君
                  </div>
                  <div className={styles.sub_text}>
                    公信宝联合创始人
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header6" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    熊立健
                  </div>
                  <div className={styles.sub_text}>
                    Lomostart 创始人
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

