import React from 'react'
import { Link } from 'react-router-dom'

const ProdDet = ({id,category , desc, image, name,price}) => {
  return (
    <Link to={"/details/"+id}>
    <div className='bg-slate-200 flex flex-col justify-center items-center p-2 rounded-lg'>
        <h1>{name}</h1>
        <h1>Category:{category} </h1>
        <h1>Description:{desc}</h1>
        <img src={image} alt="product" className='w-72 h-48'/>
        <h1>{price}</h1>
      
    </div>
    
    
    </Link>
  )
}

export default ProdDet
