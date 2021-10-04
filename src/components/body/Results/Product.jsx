import React from 'react'
import config from '../../../config'
import { SVG } from '../../common'

import "./styles.scss"

const Product = ({data}) => {
  const generic = data.image ? '' : 'generic';
  const name = data.name,
        image = data.image ? data.image : config.images.company,
        category = data.productCategory;
  return (
    <div className="card border-light mb-3" style={{maxWidth: "10rem"}} key={data.id}>
      <div className="row g-0">
        <img src={image} className={`img-fluid rounded-start card-img ${generic}`} alt={name}/>
        <div className="card-badge"><SVG icon="product" /></div>
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{category}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Product)