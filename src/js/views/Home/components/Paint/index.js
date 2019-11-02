import React, {  useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
// import Header from '../../../../views/Home/components/Paint/components/Header'
import Layout from './components/Layout'
import Canvas from './components/Canvas'
import Toolbar from './components/Toolbar'

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

function Paint (props) {
  // const { prop } = props
  const [isDraw, setIsDraw] = useState(false)
  

  useEffect(() => {
  })

  const onDrawClick = () => {
    setIsDraw(!isDraw)
  }

  return (
    <div className={cx('home-paint')}>
      <Layout.Header></Layout.Header>
      <Layout.Body>
        <Canvas></Canvas>
        <Toolbar>
          <button className={cx('home-paint-tool-draw')} onClick={onDrawClick}>{isDraw ? 'No Draw' : 'Draw'}</button>
        </Toolbar>
      </Layout.Body>
    </div>
  )
}

Paint.propTypes = propTypes
Paint.defaultProps = defaultProps

export default Paint
