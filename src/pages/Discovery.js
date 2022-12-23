import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar/navbar'
import { API } from '../const/endpoint'
import './discover.css'


const Discovery = () => {
  const [cars, setCars] = useState([]);

  

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
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
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');

    const config = {
        headers: {
            access_token: token,
        },
    };

    axios
      .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
      .then((res) => {
        getData()
        console.log(res, 'file success delete')
      })
      .catch((err) => console.log(err, 'erorr delete file'))
  };


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
                <button onClick={()=>handleDelete(item.id)}>delete</button>
                <button>
                  <Link to={`/edit/${item.id}`}>
                    Edit
                  </Link>
                </button>
              </div>
            ))
          )
        }
      </div>
      
    </div>
  )
}

export default Discovery
