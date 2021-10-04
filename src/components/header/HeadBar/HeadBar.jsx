import React from 'react'
import "./styles.scss"

export default function HeadBar () {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <img className="navbar-brand" src="https://mybrightwheel.com/wp-content/themes/_brightwheel/img/logo-alt.svg" alt="brightWheel Logo" width="168" />
        <span className="navbar-title"> / Search Engine </span>
      </div>
    </nav>
  )
}
