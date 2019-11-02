import React, {  useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
// import Calculator from './components/Calculator';
// import TimeZone from './components/TimeZone';
import Paint from './components/Paint';

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

function Home (props) {


  useEffect(() => {})

  return (
    <div className={cx('home')}>
      {/* <Calculator /> */}
      <Paint></Paint>
    </div>
  )
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

export default Home
