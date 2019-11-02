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

function Toolbar (props) {
  const { children } = props

  useEffect(() => {})

  return (
    <div className={cx('home-paint-toolbar')}>
      {children}
    </div>
  )
}

Toolbar.propTypes = propTypes
Toolbar.defaultProps = defaultProps

export default Toolbar
