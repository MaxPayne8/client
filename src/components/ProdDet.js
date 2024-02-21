import React from 'react'

const ProdDet = ({category , desc, image, name,price}) => {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center p-2 rounded-lg'>
        <h1>{name}</h1>
        <h1>Category:{category} </h1>
        <h1>Description:{desc}</h1>
        <img src={image} alt="product" className='w-72 h-48'/>
        <h1>{price}</h1>
      
    </div>
  )
}

export default ProdDet
