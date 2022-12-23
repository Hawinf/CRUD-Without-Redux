import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPage = () => {
    const [cars, setCars] = useState({});
    // const [editCars, setEditCars] = useState({})
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null)
    
    const Navigate = useNavigate()
    const { id } = useParams()

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        const token = localStorage.getItem('token')

        const configurasi = {
            headers : {
              access_token : token,
            },
        };


        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, configurasi)
            .then((res) => {
                console.log(res)
                setCars(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handleEdit = () => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                access_token: token,
            }
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('status', false);

        axios
            .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formData, config)
            .then((res) => {
                console.log(res, 'success to edit')
                // setEditCars(res.data)
                Navigate('/discover')
            })
            .catch((err) => console.log(err, 'error to edit'))
    }

    console.log(name, price, category, image, 'ini semuanya')


  return (
    <div>
        <h1>Ini Halaman Edit</h1>
        <div className='edit-wrapper'>
            <input onChange={handleName} placeholder='Nama Mobil'></input>
            <input onChange={handlePrice} placeholder='Harga'></input>
            <input onChange={handleCategory} placeholder='Category'></input>
            <input onChange={handleImage} type='file'></input>
            {/* <h2>Ini Id{id}</h2> */}
            <button onClick={handleEdit}>Update</button>
        </div>
    </div>
  )
}

export default EditPage
