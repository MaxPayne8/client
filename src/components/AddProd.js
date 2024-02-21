import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProd = () => {
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(''); // State to store the image URL

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [cat, setCat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        AddProdInfo()
    }

    const AddProdInfo = async () => {
        let formField = new FormData();
        formField.append('name', name)
        formField.append('description', desc)
        formField.append('price', price)
        formField.append('category', cat)
        if (image !== null) {
            formField.append('image', image)
        }

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/',
            data: formField,
        }).then((response) => {
            console.log(response.data);
            navigate("/");
        }).catch((error) => {
            console.error('Error adding product:', error);
        });
    }

    // Function to handle image upload
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setImageUrl(imageUrl);
        }
    };

    return (
        <form className='flex flex-col justify-center items-center gap-4 mx-auto' onSubmit={handleSubmit}>
            <input value={name} placeholder='name' className='border border-black px-1' onChange={(e) => setName(e.target.value)} />
            <input value={desc} placeholder='description' className='border border-black px-1' onChange={(e) => setDesc(e.target.value)} />
            <input value={price} placeholder='price' className='border border-black px-1' onChange={(e) => setPrice(e.target.value)} />
            <input value={cat} placeholder='category' className='border border-black px-1' onChange={(e) => setCat(e.target.value)} />
            <input type="file" placeholder='image' className='border border-black px-1' onChange={handleImageChange} />
            {/* Render the image if imageUrl is available */}
            {imageUrl && (
                <img className='w-20 h-20' src={imageUrl} alt="Selected" />
            )}
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddProd;
