import React from 'react'

import Icon from './Icon'
import styles from './TitleLogo.scss'

export default () => (
  <div className={styles.container}>
    <div className={styles.logo} />
  </div>
)

export const SmallTitleLogo = ({ ...props }) => (
  <Icon logo="title-logo" {...props} />
)
