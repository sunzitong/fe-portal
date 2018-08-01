import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import styles from './Team.less'
import Icon from '../components/Icon'

export default class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { id, team_ceo_name, team_ceo_intro } = this.props
    const animType = {
      queue: 'bottom',
    }
    console.log(team_ceo_intro)
    return (
      <div className={styles.container} id={id}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>团队介绍</h1>
          <p className={styles.en_title}>TEAM INTRODUCTION</p>
        </div>
        <div id="Team" className={styles.childer_container}>
          <OverPack
            location="Team"
          >
            <QueueAnim
              key="text"
              type={animType.queue}
              leaveReverse
              ease={['easeOutCubic', 'easeInCubic']}
            >
              <div className={styles.centent_container} key="Team">
                <Icon logo="tanbochao" className={styles.header_pic} />
                <div className={styles.introduction_container}>
                  <div className={styles.title}>
                    <h2 className={styles.name}>{team_ceo_name}</h2>
                    {/* <h2 className={styles.position}>CEO</h2> */}
                  </div>
                  <div className={styles.content}>
                    {
                      /*eslint-disable*/
                      team_ceo_intro.split(';').map((item) => {
                        return (
                          <p>{item};</p>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    )
  }
}
