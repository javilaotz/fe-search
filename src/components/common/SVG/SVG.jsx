import React from 'react'
import Animal from "./icons/Animal";
import Company from './icons/Company';
import Product from './icons/Product';
import Star from './icons/Star'

export default function SVG({ icon }) {
  switch (icon) {
    case "animal":
      return <Animal />
    case "company":
      return <Company />    
    case "product":
      return <Product />
    case "star":
      return <Star />
  
    default:
      break;
  }
}
