import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar/navbar'
import { API } from '../const/endpoint'
import './discover.css'


const Discovery = () => {
  const [cars, setCars] = useState([]);

  

  useEffect(() => {
    const token = localStorage.getItem('token')

    const configurasi = {
      headers : {
        access_token : token
      }
    }

    axios
      .get(API.GET_CARS, configurasi)
      .then((res) => {
        console.log(res);
        setCars(res.data.cars)
      })
      .catch((err) => console.log(err.message))
  },[])

  return (
    <div className='wrapper-discovery'>
      <Navbar />
      <div>Discovery Page</div>
      <button>
        <Link to='/new-car'>
          Add New Car
        </Link>      
      </button>

      <div className='card-cars'>
        {
          cars.length && (
            cars.map(item => (
              <div className='card_discover'>
                <img src={item.image} />
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <p>{item.category}</p>
              </div>
            ))
          )
        }
      </div>
      
    </div>
  )
}

export default Discovery
