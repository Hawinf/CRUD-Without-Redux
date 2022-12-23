import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../const/endpoint'

const NewCarPage = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleImage = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0])
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }


    const handleCreate = () => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token: token,
            },
        };

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('status', false);

        axios
            .post(API.POST_CARS, formData, config)
            .then((res) => {
                navigate('/discover')
            })
            .catch((err) => console.log(err));
    }

    console.log(name, price, category, image)


  return (
    <div className='newcars-wrapper'>
        <h1>Ini Halaman New Cars</h1>
        <input onChange={handleName} placeholder='Nama' />
        <input onChange={handlePrice} placeholder='Harga' />
        <input onChange={handleImage} type="file" />
        <input onChange={handleCategory} placeholder='kategory' />
        <button>
            <Link to='/discover'>
                Cancel
            </Link>
        </button>
        <button onClick={handleCreate}>Save</button>
    </div>
  )
}

export default NewCarPage;
