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
    const {
      id,
      consultant_laomao_name,
      consultant_laomao_intro,
      consultant_hmq_name,
      consultant_hmq_intro,
      consultant_wyw_name,
      consultant_wyw_intro,
      consultant_lf_name,
      consultant_lf_intro,
      consultant_tgj_name,
      consultant_tgj_intro,
      consultant_xiong_name,
      consultant_xiong_intro,
    } = this.props
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
                    {consultant_laomao_name}
                  </div>
                  <div className={styles.sub_text}>
                    {consultant_laomao_intro}
                  </div>
                </div>
              </Col>
              <Col {...col} key="assets">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header2" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    {consultant_hmq_name}
                  </div>
                  <div className={styles.sub_text}>
                    {consultant_hmq_intro}
                  </div>
                </div>
              </Col>
              <Col {...col} key="cover">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header3" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    {consultant_wyw_name}
                  </div>
                  <div className={styles.sub_text}>
                    {consultant_wyw_intro}
                  </div>
                </div>
              </Col>
              <Col {...col} key="user">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header4" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    {consultant_lf_name}
                  </div>
                  <div className={styles.sub_text}>
                    {consultant_lf_intro}
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade-count">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header5" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    {consultant_tgj_name}
                  </div>
                  <div className={styles.sub_text}>
                    {consultant_tgj_intro}
                  </div>
                </div>
              </Col>
              <Col {...col} key="trade">
                <div className={styles.pic_container}>
                  <div className={styles.icon_container}>
                    <Icon logo="header6" className={styles.pic} />
                  </div>
                  <div className={styles.text}>
                    {consultant_xiong_name}
                  </div>
                  <div className={styles.sub_text}>
                    {consultant_xiong_intro}
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

