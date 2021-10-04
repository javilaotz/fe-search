import React from 'react'
import './styles.scss';

const Search = ({ query, updateQuery, updateIsSearching, listenInput }) => {
  return (
    <div className="input-group input-group-lg search container">
      <input 
        tabIndex="0" 
        onKeyDown={listenInput} 
        type="text" 
        className="form-control" 
        aria-label="Input Search" 
        aria-describedby="inputGroup-sizing-lg" 
        placeholder="Search" 
        value={query} 
        onChange={(e) => updateQuery(e.target.value) } 
      />
      <button 
        className="btn btn-primary" 
        type="button" 
        id="button-addon2" 
        onClick={() => updateIsSearching()}
      >
        Go!
      </button>
    </div>
  )
}

export default React.memo(Search)
