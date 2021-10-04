import React from 'react'
import "./styles.scss"

export default function Loader() {
  return (
    <div className="loader">
      <img className="image" src="https://static.intercomassets.com/avatars/762136/square_128/custom_avatar-1626993963.png?1626993963" alt="loader Logo" width="50"/>
      <span className="caption"> Loading </span>
    </div>
  )
}
