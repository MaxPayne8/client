import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProdDet from './ProdDet';


const ShowProd = () => {
    const[prod , setProd] = useState([]);

    const getProd = async()=>{
        const response = await axios.get("http://127.0.0.1:8000/api/");
        setProd(response.data)
        console.log("This is resp",response.data);
        // console.log(prod)
    }
   
    // useLayoutEffect(()=>async()=>{
    //     getProd()
    // },[])
    useEffect(() => {
            getProd()
    }, [])

  return (
    <div >
        <h1 className='mb-10'>All Products</h1>
        <div className='flex justify-evenly'>
        {prod.map((e) =>
            <ProdDet key={e.id} category={e.category} desc ={e.description} image={e.image} name={e.name} price={e.price}/>
        )}
        </div>
        
      
    </div>
  )
}

export default ShowProd
