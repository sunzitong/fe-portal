import React from 'react'
import ReactEcharts from 'echarts-for-react'
import {
  Row,
  Col,
} from 'antd'
import styles from './CreAssignment.less'

const col = {
  lg: 12,
  xs: 24,
}

const CRE_ASSIGNMENT_OPTIONS = {
  title: {
    text: 'CRE分配',
    left: 'center',
    top: '48%',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {d}%',
  },
  legend: {
    orient: 'horizontal',
    x: 'center',
    bottom: 1,
    data: ['Token sale', '团队持有', '机构投资者', '商业拓展', '早期投资人', '社区奖励'],
  },
  series: [
    {
      name: 'CRE分配',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        formatter: '{c}%',
      },
      data: [
        { value: 40, name: 'Token sale' },
        { value: 22, name: '团队持有' },
        { value: 16, name: '机构投资者' },
        { value: 10, name: '商业拓展' },
        { value: 8, name: '早期投资人' },
        { value: 4, name: '社区奖励' },
      ],
      color: ['rgb(63, 162, 252)', 'rgb(64, 201, 202)', 'rgb(85, 203, 120)', 'rgb(247, 210, 72)', 'rgb(238, 101, 125)', 'rgb(205, 118, 237)'],
    },
  ],
}

const FUND_ASSIGNMENT_OPTIONS = {
  title: {
    text: '资金分配',
    left: 'center',
    top: '48%',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {d}%',
  },
  legend: {
    orient: 'horizontal',
    x: 'center',
    bottom: 1,
    data: ['市场', '研发', '风控合规建设', '运营', '其他'],
  },
  series: [
    {
      name: '资金分配',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        formatter: '{d}%',
      },
      data: [
        { value: 54, name: '市场' },
        { value: 23, name: '研发' },
        { value: 9, name: '风控合规建设' },
        { value: 9, name: '运营' },
        { value: 5, name: '其他' },
      ],
      color: ['rgb(63, 162, 252)', 'rgb(64, 201, 202)', 'rgb(85, 203, 120)', 'rgb(247, 210, 72)', 'rgb(238, 101, 125)', 'rgb(205, 118, 237)'],
    },
  ],
}

export default class CreAssignment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { id } = this.props
    return (
      <div className={styles.container} id={id}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>CRE分配</h1>
          <p className={styles.en_title}>ALLOCATION OF CRE</p>
          {/* <p className={styles.sub_title}>CRE 是 CYBEREITS 平台的 Token, 是生态系统中的价值媒介。</p> */}
        </div>
        <div className={styles.centent_container} id="CreAssignment">
          <Row className={styles.row}>
            <Col {...col}>
              <div className={styles.charts_container}>
                <ReactEcharts
                  style={{ width: '100%', height: '500px', marginTop: '-70px' }}
                  option={CRE_ASSIGNMENT_OPTIONS}
                />
              </div>
            </Col>
            <Col {...col}>
              <div className={styles.charts_container}>
                <ReactEcharts
                  style={{ width: '100%', height: '500px', marginTop: '-70px' }}
                  option={FUND_ASSIGNMENT_OPTIONS}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
