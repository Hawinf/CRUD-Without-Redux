import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditPage = () => {
    const [cars, setCars] = useState({});

    const { id } = useParams();

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


  return (
    <div>
        <h1>Ini Halaman Edit</h1>
        <div className='edit-wrapper'>
            <img />
            <h1></h1>
            <h2>Ini Id{id}</h2>
            <p></p>
            <button>Save</button>
        </div>
    </div>
  )
}

export default EditPage
