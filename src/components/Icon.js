import React from 'react'
import PropTypes from 'prop-types'
/*eslint-disable*/
import styles from './Icon.less'

const Icon = ({
  logo,
  style,
  className,
  ...rest
}) =>
  (
    <i
      className={[`icon-${logo}`].concat(className).join(' ')}
      style={style}
      {...rest}
    />
  )

Icon.defaultProps = {
  style: undefined,
  className: undefined,
}

Icon.propTypes = {
  logo: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Icon
