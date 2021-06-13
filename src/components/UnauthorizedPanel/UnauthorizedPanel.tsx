import React from 'react'

import './styles.scss'

import UnauthorizedImg from '../../assets/Unauthorized_Img.png'

const UnauthorizedPanel = () => (
  <div className="unauth-panel">
    <img src={UnauthorizedImg} alt="" />
  </div>
)

export default UnauthorizedPanel
