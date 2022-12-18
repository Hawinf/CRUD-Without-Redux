import React,{ useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    })

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
        }

  return (
    <div className='navbar-container'>
        <p>
            <Link to={'/'}>Homepage</Link>
        </p>
        <p>
            <Link to={'/discover'}>Discover</Link>
        </p>

        {
            isLogin ? (
                <Link onClick={handleLogOut}>Log Out</Link>
            ) : (
                <p>
                    <Link to={'/login'}>Login</Link>
                </p>
            )
        }

       
        <p>
            <Link to={'/register'}>Register</Link>
        </p>
    </div>
  )
}

export default Navbar
