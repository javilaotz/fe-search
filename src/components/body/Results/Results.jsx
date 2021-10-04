import React from 'react'
import { Loader } from '../../common'
import Animal from "./Animal"
import Company from "./Company"
import Product from "./Product"

import "./styles.scss";

const Results = ({ starred, isSearching, isFetched, entries, error}) => {
  const buildItem = (result) => {
    switch (result.type) {
      case "animal":
        return <Animal setStarred={starred} data={result} key={result.id}/>
      case "company":
        return <Company setStarred={starred} data={result} key={result.id}/>
      case "product":
        return <Product setStarred={starred} data={result} key={result.id}/>      

      default:
        break;
    }
  }

  const results = (
    entries.map(result => buildItem(result))  
  )

  return (
    <div className="container">
      { isSearching && entries.length === 0 && <div className="loader"><Loader /></div> }
      { isFetched && entries.length === 0 && "no results"}
      { isFetched && error && "Error"}
      { isFetched && entries.length > 0 && <div className="results">{results}</div>}
    </div>
  )
}

export default React.memo(Results)
