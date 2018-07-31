import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from '@cybereits/timeline'
import '@cybereits/timeline/style.min.css'
import styles from './Planning.less'
// import Icon from '../components/Icon'

export default class Planning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { id } = this.props
    return (
      <div className={styles.container} id={id}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>历程与规划</h1>
          <p className={styles.en_title}>DEVELOPMENT PROCESS AND PLANNING</p>
        </div>
        <div className={styles.centent_container} id="TokenValue">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016.10"
              style={{color: 'white'}}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<Icon logo="arrow" />}
            >
              <h3 className="vertical-timeline-element-title">团队建设</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016.11"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">获得200万种子轮融资</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016.12"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">获得300万天使轮融资</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017.04"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">中国试运营ALPHA版上线</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.06"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">正式版发布北京不动产上线</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.07"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">美国不动产正式正式上线</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.08"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">不动产交易所上线试运营</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.09"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">获得1500万PREA轮融资</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.10"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">C2C模式二级市场上线</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.12"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">欧洲不动产上线</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018第一季度"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">CYBEREITS TOKEN SALE完成<br />中国区不动产金融APP正式上线</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018第二季度"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">全球不动产3R数字化认证行业标准发布</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018第三季度"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">全球不动产数字化认证平台上线<br />接入20家以上多国不动产中介平台</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018第四季度"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">全球不动产交易平台<br />CYBEREITS发布</h3>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            /> */}
          </VerticalTimeline>
        </div>
      </div>
    )
  }
}
