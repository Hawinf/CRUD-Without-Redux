import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewCarPage = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleImage = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0]);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }


    const handleCreate = () => {
        let formData = new FormData();

        axios
            .post('', '')
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
