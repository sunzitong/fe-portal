import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({
  children,
  checked,
  onClick,
  ...rest
}) =>
  (
    <div
      tabIndex={0}
      role="radio"
      aria-checked={checked}
      onClick={onClick}
      className="dis-flex small fore-black hand-cursor m-t-10"
      style={{
        padding: '.6rem 0',
        userSelect: 'none',
      }}
    >
      <i
        className={[
          'fa',
          checked
            ? 'fa-check-square'
            : 'fa-square-o',
        ].join(' ')}
        style={{
          width: '1.5rem',
          textAlign: 'center',
        }}
        {...rest}
      />
      <div className="flex-1" style={{ wordBreak: 'break-all' }}>{children}</div>
    </div>
  )

Checkbox.defaultProps = {
  checked: false,
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Checkbox
