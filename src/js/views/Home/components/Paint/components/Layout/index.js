import React, {  useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Header from './components/Header'
import Body from './components/Body'

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

function Layout (props) {
  const { children } = props

  useEffect(() => {})

  return (
    <div className={cx('home-paint-layout')}>
      {children}
    </div>
  )
}

Layout.propTypes = propTypes

Layout.Header = Header
Layout.Body = Body

export default Layout
