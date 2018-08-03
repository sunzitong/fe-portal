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
    const {
      id,
      team_building,
      team_building_date,
      seed_finance,
      seed_finance_date,
      angel_finance,
      angel_finance_date,
      alpha,
      alpha_date,
      bejiing_real_estate,
      bejiing_real_estate_date,
      american_real_estate,
      american_real_estate_date,
      exchange,
      exchange_date,
      PREA,
      PREA_date,
      c2c,
      c2c_date,
      European,
      European_date,
      app,
      app_date,
      sanr,
      sanr_date,
      twenty,
      twenty_date,
      cybereits,
      cybereits_date,
    } = this.props
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
              date={team_building_date}
              style={{color: 'white'}}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
              // icon={<Icon logo="arrow" />}
            >
              <h3 className="vertical-timeline-element-title">{team_building}</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={seed_finance_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{seed_finance}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={angel_finance_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{angel_finance}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={alpha_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{alpha}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={bejiing_real_estate_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{bejiing_real_estate}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={american_real_estate_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{american_real_estate}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={exchange_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{exchange}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={PREA_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{PREA}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={c2c_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{c2c}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={European_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{European}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={app_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{app}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={sanr_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{sanr}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={twenty_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{twenty}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={cybereits_date}
              iconStyle={{ background: '#6de9f7', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{cybereits}</h3>
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
