import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({
  logo,
  style,
  className,
  ...rest
}) => {

  // 二货微信开发工具不能显示 class 里的 background-image 属性
  // 但是由于发到正式环境之后 img 是生成 hash 字符串的
  // 所以这里的 style 会覆盖 class 中的属性 导致图标找不到
  // 仅在开发环境生效
  let customStyle = Object.assign(window.__INIT_STATE.debug ? {
    backgroundImage: `url(/images/${logo}.png)`,
  } : {}, style)

  return (
    <i
      className={[`icon-${logo}`].concat(className).join(' ')}
      style={customStyle}
      {...rest}
    />
  )
}

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
