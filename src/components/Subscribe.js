import React from 'react'
import {
  message,
} from 'antd'
import { api_service } from '../config/env.json'
import styles from './Subscribe.less'

export default class Subscribe extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.container}>
        <input ref={(input) => { this.input = input }} type="text" className={styles.input} placeholder="输入邮箱以订阅Cybereits最新资讯" />
        <div
          className={styles.button}
          role="button"
          tabIndex="-1"
          onClick={() => {
            let _email = this.input.value
            if (!/^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test(_email)) {
              message.error('无效的邮件地址')
            } else {
              fetch(`${api_service}/http/email/subscribe`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: _email,
                }),
              }).then(res => res.json()).then((data) => {
                if (data.result) {
                  message.success('订阅邮件成功！')
                } else {
                  message.error(data.error)
                }
              }).catch((error) => {
                console.log(error)
              })
            }
          }}
        >订阅</div>
      </div>
    )
  }
}
