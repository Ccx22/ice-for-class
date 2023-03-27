import React, { Component, createRef } from 'react'
import style from './index.module.scss'
import imgurl from '../../test.jpg'
const img = new Image()
export default class Root extends Component {
  constructor() {
    super()
    this.state = {
      url: imgurl
    }
    this.ImgRef = createRef()
  }
  componentDidMount() {
    this.init()
  }
  init = () => {
    const imgShow = this.ImgRef.current
    const imgShow2d = imgShow.getContext('2d')
    img.src = this.state.url
    img.onerror = () => {
      console.log('加载失败')
    }
    img.onload = () => {
      // let PO = { x: img.width / 2, y: img.height / 2 }
      // this.setState({})
      this.onDraw(imgShow, imgShow2d)
    }
  }
  onDraw = (imgShow, imgShow2d) => {
    imgShow2d.drawImage(img)
  }
  render() {
    return (
      <div className={style.wrap}>
        <canvas ref={this.ImgRef} className={style.wrap_canvas} />
      </div>
    )
  }
}
