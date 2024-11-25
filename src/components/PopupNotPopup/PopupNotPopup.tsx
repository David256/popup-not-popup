// import React from 'react'
import type { FunctionComponent } from 'react'

import './PopupNotPopup.css'

interface PopupNotPopupProps {}

const PopupNotPopup: FunctionComponent<PopupNotPopupProps> = () => {
  return (
    <>
      <div className="popup-background">
        <div className="popup">
          <h2>Popup</h2>
          {/* Popup content here */}
        </div>
      </div>
    </>
  )
}

export default PopupNotPopup
