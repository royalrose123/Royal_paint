import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components

// Lib MISC

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  prop: PropTypes.any,
}

export const defaultProps = {
  prop: 'prop',
}

function Header (props) {
  const { children } = props

  useEffect(() => {})

  return (
    <div className={cx('home-paint-header')}>
      {children}
    </div>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
