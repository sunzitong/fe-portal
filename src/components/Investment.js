import React from 'react'
// import Icon from '../components/Icon'
import styles from './Investment.less'

let num = 0

export default class Investment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButtonKey: '0',
      onRotating: false,
      showInvestors: true,
    }
  }

  componentDidMount() {
    this.lixiaolai.addEventListener('webkitAnimationEnd', () => {
      num = num + 1
      console.log(this.state.activeButtonKey)
      if (this.state.activeButtonKey === '1') {
        console.log(8989)
        this.setState({
          showInvestors: false,
          organizationNinty: true,
          investorsNinty: false,
        })
      } else {
        this.setState({
          showInvestors: true,
          organizationNinty: false,
          investorsNinty: true,
        })
      }
      if (num === 2) {
        this.setState({
          onRotating: false,
        }, () => {
          num = 0
        })
      }
      console.log('动画结束')
    })
    console.log(this.jiuhe)
  }

  render() {
    const {
      id,
      early_investors,
      institution_investors,
      jiuhe,
      jiuhe_intro,
      lixiaolai,
      lixiaolai_intro,
      qidi,
      qidi_intro,
      yingbiziben,
      yingbiziben_intro,
      linkvc,
      linkvc_intro,
      jiedianziben,
      jiedianziben_intro,
    } = this.props
    console.log(this.state.onRotating)
    return (
      <div className={styles.container} id={id}>
        <div className={styles.button_container}>
          <div className={`${styles.button_group} ${this.state.activeButtonKey === '0' ? styles.active_left : styles.active_right}`}>
            <div
              style={this.state.activeButtonKey === '1' ? { paddingRight: '39px' } : null}
              className={`${styles.button} ${this.state.activeButtonKey === '0' ? styles.active_left : null}`}
              role="button"
              tabIndex="-1"
              onClick={() => {
                if (this.state.activeButtonKey !== '0') {
                  this.setState({
                    activeButtonKey: '0',
                    onRotating: true,
                  })
                }
              }}
            >
              {early_investors}
            </div>
            <div
              style={this.state.activeButtonKey === '0' ? { paddingLeft: '39px' } : null}
              className={`${styles.button} ${this.state.activeButtonKey === '1' ? styles.active_right : null}`}
              role="button"
              tabIndex="-1"
              onClick={() => {
                if (this.state.activeButtonKey !== '1') {
                  this.setState({
                    activeButtonKey: '1',
                    onRotating: true,
                  })
                }
              }}
            >
              {institution_investors}
            </div>
          </div>
        </div>
        <div className={styles.content_container} >
          <div
            className={styles.pic_group}
          >
            {
              this.state.showInvestors
                ? <div
                  className={`${styles.item_container} ${this.state.onRotating ? styles.active : null} ${this.state.activeButtonKey === '1' ? styles.investorsRotate : styles.organizationRotate} ${this.state.organizationNinty && this.state.onRotating ? styles.nintyDeg : null}`}>
                  <div className={`${styles.pic} ${styles.Investors3}`} />
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {jiuhe}
                    </div>
                    <div className={styles.sub_title}>
                      {jiuhe_intro}
                    </div>
                  </div>
                </div> : <div className={`${styles.item_container} ${this.state.onRotating ? styles.active : null} ${this.state.activeButtonKey === '1' ? styles.organizationRotate : styles.investorsRotate} ${this.state.organizationNinty && this.state.onRotating ? styles.nintyDeg : null}`}>
                  <div className={`${styles.pic} ${styles.organization1}`} />
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {yingbiziben}
                    </div>
                    <div className={styles.sub_title}>
                      {yingbiziben_intro}
                    </div>
                  </div>
                </div>
            }
            {
              this.state.showInvestors
                ? <div ref={(item) => { this.lixiaolai = item }} className={`${styles.item_container} ${this.state.onRotating ? styles.active : null} ${this.state.activeButtonKey === '1' ? styles.investorsRotate : styles.organizationRotate} ${this.state.organizationNinty && this.state.onRotating ? styles.nintyDeg : null}`}>
                  <div className={`${styles.pic} ${styles.Investors1}`} />
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {lixiaolai}
                    </div>
                    <div className={styles.sub_title}>
                      {lixiaolai_intro}
                    </div>
                  </div>
                </div> : <div ref={(item) => { this.qidi = item }} className={`${styles.item_container} ${this.state.onRotating ? styles.active : null} ${this.state.activeButtonKey === '1' ? styles.organizationRotate : styles.investorsRotate} ${this.state.organizationNinty && this.state.onRotating ? styles.nintyDeg : null}`}>
                  <div className={`${styles.pic} ${styles.organization2}`} />
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {jiedianziben}
                    </div>
                    <div className={styles.sub_title}>
                      {jiedianziben_intro}
                    </div>
                  </div>
                </div>
            }
            {
              this.state.showInvestors
                ? <div className={`${styles.item_container} ${this.state.onRotating ? styles.active : null} ${this.state.activeButtonKey === '1' ? styles.investorsRotate : styles.organizationRotate} ${this.state.organizationNinty && this.state.onRotating ? styles.nintyDeg : null}`}>
                  <div className={`${styles.pic} ${styles.Investors2}`} />
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {qidi}
                    </div>
                    <div className={styles.sub_title}>
                      {qidi_intro}
                    </div>
                  </div>
                </div> : <div className={`${styles.item_container} ${this.state.onRotating ? styles.active : null} ${this.state.activeButtonKey === '1' ? styles.organizationRotate : styles.investorsRotate} ${this.state.organizationNinty && this.state.onRotating ? styles.nintyDeg : null}`}>
                  <div className={`${styles.pic} ${styles.organization3}`} />
                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      {linkvc}
                    </div>
                    <div className={styles.sub_title}>
                      {linkvc_intro}
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
