import React, { useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Layout from './components/Layout'
import Canvas from './components/Canvas'
import Toolbar from './components/Toolbar'
import Icons from '../../../../../assets/icons'

// Lib MISC
import canvasToImage from '../../../../lib/utils/canvas-to-image'


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

const initialState = {
  isDrawing: true,
  isErasing: false,
  lineWidth: 1,
  lineColor: '#000000'
};

const paintReducer = (state, action) => {
  switch (action.type) {
    case 'setIsDrawing':
      return {
        ...state,
        isDrawing: action.isDrawing,
        isErasing: action.isErasing,
      }

    case 'setIsErasing':
      return {
        ...state,
        isDrawing: action.isDrawing,
        isErasing: action.isErasing
      }

    case 'changeLineWidth':
      return {
        ...state,
        lineWidth: action.lineWidth
      }

    case 'changeLineColor':
      return {
        ...state,
        lineColor: action.lineColor
      }

    default:
      break
  }
}

function Paint (props) {
  // const { prop } = props

  const [canvas, setCanvas] = useState({})
  const [canvasURL, setCanvasURL] = useState('')

  const [state, dispatch] = useReducer(paintReducer, initialState)
  const { isDrawing, isErasing, lineWidth, lineColor} = state

  useEffect(() => {
    const myCanvas = document.getElementById('myCanvas');
    
    myCanvas.width = myCanvas.offsetWidth  // https://ithelp.ithome.com.tw/articles/10194230 
    myCanvas.height = myCanvas.offsetHeight

    // setCanvasURL(myCanvas.toDataURL('image/jpeg'))
    setCanvasURL(canvasToImage(myCanvas, '#FFFFFF'))
    
    setCanvas(myCanvas)
  }, [canvas])


  const onBrushClick = () => {
    dispatch({type: 'setIsDrawing',isDrawing : !isDrawing, isErasing: false})
  }

  const onEraserClick = () => {
    dispatch({type: 'setIsErasing',isErasing : !isErasing, isDrawing: false})
  }

  const onSaveClick = () => {
    const downloadCanvas = document.getElementById('download');

    downloadCanvas.href =  canvasToImage(canvas, '#FFFFFF')
    // downloadCanvas.href =  canvas.toDataURL('image/jpeg')
  }

  const onClearAllClick = () => {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  const onLineWidthChange = (event) => {
    dispatch({type: 'changeLineWidth',lineWidth : event.target.value})
  }

  const onLineColorChange = (event) => {
    dispatch({type: 'changeLineColor',lineColor : event.target.value})
  }

  const onUndoClick = (event) => {
    console.log('object')
  }

  return (
    <div className={cx('home-paint')}>
      <Layout.Header>
        <div className={cx('home-paint-header-action-wrapper')} onClick={onSaveClick}>
          <a className={cx('home-paint-header-action-download')} id='download' href={canvasURL} download='myCanvas'>
            <img className={cx('home-paint-header-action-icon')} src={Icons.Save} alt='save'></img>
            <p className={cx('home-paint-header-action-text')}>SAVE</p>
          </a>
        </div>
        <div className={cx('home-paint-header-action-wrapper')} onClick={onClearAllClick}>
          <img className={cx('home-paint-header-action-icon')} src={Icons.Clear} alt='clear'></img>
          <p className={cx('home-paint-header-action-text')}>CLEAR ALL</p>
        </div>
        <div className={cx('home-paint-header-action-wrapper')} onClick={onUndoClick}>
          <img className={cx('home-paint-header-action-icon')} src={Icons.Undo} alt='undo' ></img>
          <p className={cx('home-paint-header-action-text')}>UNDO</p>
        </div>
        <div className={cx('home-paint-header-action-wrapper')}>
          <img className={cx('home-paint-header-action-icon')} src={Icons.Redo} alt='redo' onClick={onBrushClick}></img>
          <p className={cx('home-paint-header-action-text')}>REDO</p>
        </div>
      </Layout.Header>
      <Layout.Body>
        <Canvas canvas={canvas} isDrawing={isDrawing} isErasing={isErasing} lineWidth={lineWidth} lineColor={lineColor}></Canvas>
        <Toolbar>
          <img className={cx('home-paint-tool-icon')} data-is-active={isDrawing} src={Icons.Brush} alt='brush' onClick={onBrushClick}></img>
          <img className={cx('home-paint-tool-icon')} data-is-active={isErasing} src={Icons.Eraser} alt='eraser' onClick={onEraserClick}></img>
          <div className={cx('home-paint-tool-size-wrapper')}>
            <p>SIZE : </p>
            <input className={cx('home-paint-tool-size')} onChange={onLineWidthChange} value={lineWidth}></input>
            <p>px</p>
          </div>
          <div className={cx('home-paint-tool-color-wrapper')}>
          <p>COLOR : </p>
          <input type='color' className={cx('home-paint-tool-color')} onChange={onLineColorChange} value={lineColor}></input>
          </div>
        </Toolbar>
      </Layout.Body>
    </div>
  )
}

Paint.propTypes = propTypes
Paint.defaultProps = defaultProps

export default Paint
