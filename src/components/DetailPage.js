import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProdDet from './ProdDet';

const DetailPage = () => {
    const[prod ,setProd] = useState("");
    const{ id } = useParams();
    const navigate = useNavigate();
    console.log(id)
    const getProd = async()=>{
        const response = await axios.get("http://127.0.0.1:8000/api/");
        
        const  selectedProd = response.data.filter((p)=>p.id==id)
        setProd(selectedProd );
        
       
        // console.log(prod)
    }

    const delProd= async(id)=>{
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        navigate("/")
    }

    useEffect(()=>{getProd()},[])
    useEffect(()=>console.log(prod),[prod])
  return (
    <div>
         <ProdDet key={prod[0]?.id} id={prod[0]?.id} category={prod[0]?.category} desc ={prod[0]?.description} image={prod[0]?.image} name={prod[0]?.name} price={prod[0]?.price}/>
         <div className='flex justify-center gap-2 '>
            <Link to={"/update/"+id}><button className='p-1 bg-slate-700 text-slate-100'>Update</button></Link>
    
    <button className='p-1 bg-slate-700 text-slate-100' onClick={()=>delProd(id)}>Delete</button>
    </div>
    </div>
  )
}

export default DetailPage
