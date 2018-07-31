import React from 'react'

import Icon from './Icon'
import styles from './TitleLogo.less'

export default () => (
  <div className={styles.container}>
    <div className={styles.logo} />
  </div>
)

export const SmallTitleLogo = ({ ...props }) => (
  <Icon logo="logo-sm" {...props} />
)

export const HorizontalTitleLogo = ({ ...props }) => (
  <Icon logo="title-logo-blue" {...props} />
)
