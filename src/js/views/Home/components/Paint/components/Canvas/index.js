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
  // const { children } = props
  const [canvas, setCanvas] = useState({})
  const [isPainting, setIsPainting] = useState(false)
  // const [coordinate, setCoordinate] = useState({x: 0, y: 0})

  // let lastX = 0, lastY = 0
  
  const lastXRef = useRef(0)
  const lastYRef = useRef(0)

  
  useEffect(() => {

    const myCanvas = document.getElementById('myCanvas');

      // var canvas=document.querySelector('#myCanvas');
      console.warn('myCanvas', myCanvas)
      setCanvas(myCanvas)

  }, [setCanvas])

  const onMouseDown = (event) => {

    setIsPainting(true)
    // console.log('1111',canvas.getContext("2d"))
    const aaa = canvas.getContext("2d")
    // aaa.strokeStyle = 'red'
    // aaa.lineWidth = 2
    // console.log('event.nativeEvent.offsetLeft 111', event.nativeEvent.offsetX)
    //   console.log('event.nativeEvent.offsetTop 222', event.nativeEvent.offsetY)

      aaa.beginPath()
      lastXRef.current = event.nativeEvent.offsetX + 1
      lastYRef.current = event.nativeEvent.offsetY + 1
      aaa.moveTo(lastXRef.current, lastYRef.current)
      // aaa.moveTo(event.nativeEvent.offsetX -1, event.nativeEvent.offsetY-1)
      console.log('lastX 333',lastXRef.current)
      console.log('lastY 444', lastYRef.current)
      aaa.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
      console.log('event.nativeEvent.offsetLeft 111', event.nativeEvent.offsetX)
      console.log('event.nativeEvent.offsetTop 222', event.nativeEvent.offsetY)
      // aaa.moveTo(77, 42)
      // aaa.lineTo(76, 41)
      aaa.stroke();

    // this.offsetX=this.offsetLeft;
    // this.offsetY=this.offsetTop;

    // console.log('event.nativeEvent.offsetLeft 333', event.nativeEvent.offsetX)
    // console.log('event.nativeEvent.offsetTop 444', event.nativeEvent.offsetY)

    // console.log('event.nativeEvent.pageX 555', event.nativeEvent.pageX)
    // console.log('event.nativeEvent.pageY 666', event.nativeEvent.pageY)
    // console.log('moveX 777', event.nativeEvent.pageX - event.nativeEvent.offsetX)
    // console.log('moveY 888', event.nativeEvent.pageY - event.nativeEvent.offsetY)


    // setCoordinate({x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY})

    // aaa.beginPath();
    // aaa.moveTo( event.nativeEvent.offsetX, event.nativeEvent.offsetY)
    lastXRef.current = event.nativeEvent.offsetX
    lastYRef.current = event.nativeEvent.offsetY
  }

  const onMouseMove =(event) =>{
    if(isPainting){
      const aaa = canvas.getContext("2d")
      // aaa.strokeStyle = 'red'
      aaa.lineWidth = 2
      // console.warn('event.nativeEvent.offsetX', event.nativeEvent.offsetX)
      console.log('event.nativeEvent.offsetLeft 111', event.nativeEvent.offsetX)
      console.log('event.nativeEvent.offsetTop 222', event.nativeEvent.offsetY)

      console.log('lastX 333',lastXRef.current)
      console.log('lastY 444', lastYRef.current)
      aaa.beginPath()
      aaa.moveTo(lastXRef.current, lastYRef.current)
      aaa.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
      aaa.stroke();
      lastXRef.current = event.nativeEvent.offsetX
      lastYRef.current = event.nativeEvent.offsetY
    }
  }

  const onMouseUp = (event) =>{
    setIsPainting(false)
  }
  
  

  

  

  return (
    <canvas id='myCanvas' className={cx('home-paint-canvas')} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
    </canvas>
  )
}

Canvas.propTypes = propTypes
Canvas.defaultProps = defaultProps

export default Canvas
