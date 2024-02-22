// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';

// const UpdateProd = () => {
//     const navigate = useNavigate();
//     const {id} = useParams();
//     console.log(id)
//     const[prod ,setProd] = useState("");
//     const getProd = async()=>{
//         const {data} = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
//         // setProd(response.data);
//         setCat(data.category)
//         setName(data.name)
//         setDesc(data.description)
//         setImage(data.image)
//         setPrice(data.price)
//         setImageUrl(data.image);
//         // console.log(prod)
//     }


//     useEffect(()=>{getProd()},[])
//     useEffect(()=>console.log(prod),[prod])

    

//     const [image, setImage] = useState(prod.image);
//     // const url =URL.createObjectURL(image)
//     const [imageUrl, setImageUrl] = useState(""); 

//     const [name, setName] = useState(prod.name);
//     const [desc, setDesc] = useState(prod.desc);
//     const [price, setPrice] = useState(prod.price);
//     const [cat, setCat] = useState(prod.cat);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         UpdProdInfo()
//     }

//     const UpdProdInfo = async () => {
//         let formField = new FormData();
//         formField.append('name', name)
//         formField.append('description', desc)
//         formField.append('price', price)
//         formField.append('category', cat)
//         if (image !== null) {
//             formField.append('image', image)
//         }

//         await axios({
//             method: 'put',
//             url: `http://127.0.0.1:8000/api/${id}/`,
//             data: formField,
//         }).then((response) => {
//             console.log(response.data);
//             navigate("/");
//         }).catch((error) => {
//             console.error('Error adding product:', error);
//         });
//     }

   
//     const handleImageChange = (e) => {
//         const selectedFile = e.target.files[0];

//         // If no new file is selected, do not update the image state
//         if (!selectedFile) {
//             return;
//         }

//         setImage(selectedFile);

//         if (selectedFile) {
//             const imageUrl = URL.createObjectURL(selectedFile);
//             setImageUrl(imageUrl);
//         }
//     };
  

//     return (
        
//         <form className='flex flex-col justify-center items-center gap-4 mx-auto' onSubmit={handleSubmit}>
//             <input value={name} placeholder='name' className='border border-black px-1' onChange={(e) => setName(e.target.value)} />
//             <input value={desc} placeholder='description' className='border border-black px-1' onChange={(e) => setDesc(e.target.value)} />
//             <input value={price} placeholder='price' className='border border-black px-1' onChange={(e) => setPrice(e.target.value)} />
//             <input value={cat} placeholder='category' className='border border-black px-1' onChange={(e) => setCat(e.target.value)} />
//             <input type="file" fileName={image} placeholder='image' className='border border-black px-1' onChange={handleImageChange} />
//             {/* Render the image if imageUrl is available */}
//             {!imageUrl && (
//                 <img className='w-20 h-20' src={image} alt="Selected" />
//             )}
//             {imageUrl && (
//                 <img className='w-20 h-20' src={imageUrl} alt="Selected" />
//             )}
//             <button type="submit">Update</button>
//         </form>
//     );
// }

// export default UpdateProd;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)
    const [prod, setProd] = useState("");
    const getProd = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        // setProd(response.data);
        setCat(data.category)
        setName(data.name)
        setDesc(data.description)
        setImage(data.image)
        setPrice(data.price)
        // Set initial imageUrl with fetched image
        setImageUrl(data.image);
        // console.log(prod)
    }


    useEffect(() => { getProd() }, [])
    useEffect(() => console.log(prod), [prod])



    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [cat, setCat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        UpdProdInfo()
    }

    const UpdProdInfo = async () => {
        let formField = new FormData();
        formField.append('name', name)
        formField.append('description', desc)
        formField.append('price', price)
        formField.append('category', cat)
        if (image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'put',
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formField,
        }).then((response) => {
            console.log(response.data);
            navigate("/");
        }).catch((error) => {
            console.error('Error adding product:', error);
        });
    }


    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];

        // If no new file is selected, do not update the image state
        if (!selectedFile) {
            return;
        }

        setImage(selectedFile);

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setImageUrl(imageUrl);
        }
    };



    return (

        <form className='flex flex-col justify-center items-center gap-4 mx-auto' onSubmit={handleSubmit}>
            <h1>Name:</h1>
            <input value={name} placeholder='name' className='border border-black px-1' onChange={(e) => setName(e.target.value)} />
            <h1>Description:</h1>
            <input value={desc} placeholder='description' className='border border-black px-1' onChange={(e) => setDesc(e.target.value)} />
            <h1>Price:</h1>
            <input value={price} placeholder='price' className='border border-black px-1' onChange={(e) => setPrice(e.target.value)} />
            <h1>Category:</h1>
            <input value={cat} placeholder='category' className='border border-black px-1' onChange={(e) => setCat(e.target.value)} />
            {/* Render the image if imageUrl is available */}
            <h1>Choose New Image:*</h1>
            <input type="file" fileName={image} placeholder='image' className='border border-black px-1' onChange={handleImageChange} />
            {imageUrl && (
                <div className='flex flex-col justify-center items-center'>
                <h1>Previous Image</h1>
                <img className='w-20 h-20' src={imageUrl} alt="Selected" />
                </div>
                
            )}
            {!imageUrl && (
                <img className='w-20 h-20' src={image} alt="Selected" />
            )}
            <button type="submit">Update</button>
        </form>
    );
}

export default UpdateProd;
