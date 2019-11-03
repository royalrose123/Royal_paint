import React, { useState, useEffect, useRef } from 'react'
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

function Canvas (props) {
  const { canvas, isDrawing, isErasing, lineWidth, lineColor } = props

  const [isPainting, setIsPainting] = useState(false)
  
  const lastXRef = useRef(0)
  const lastYRef = useRef(0)

  useEffect(() => {
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth  
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [canvas.height, canvas.offsetHeight, canvas.offsetWidth, canvas.width])

  const onMouseDown = (event) => {
    setIsPainting(true)

    lastXRef.current = event.nativeEvent.offsetX
    lastYRef.current = event.nativeEvent.offsetY
  }

  const onMouseMove = (event) => {
    if(isPainting){
      const myCanvas = canvas.getContext("2d")
      // myCanvas.lineJoin = 'round'
      myCanvas.lineCap = 'round'
      myCanvas.lineWidth = lineWidth

      switch (true){
        case isDrawing:
            myCanvas.strokeStyle = lineColor
          break
        case isErasing:
            myCanvas.strokeStyle = 'white'
          break
        default:
          break
      }

      myCanvas.beginPath()
      myCanvas.moveTo(lastXRef.current, lastYRef.current)
      myCanvas.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
      myCanvas.stroke();
      lastXRef.current = event.nativeEvent.offsetX
      lastYRef.current = event.nativeEvent.offsetY
    }
  }

  const onMouseUp = (event) =>{
    setIsPainting(false)
  }

  return (
    <>
      <canvas id='myCanvas' className={cx('home-paint-canvas')} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      </canvas>
    </>
  )
}

Canvas.propTypes = propTypes
Canvas.defaultProps = defaultProps

export default Canvas
