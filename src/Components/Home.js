import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Appbar from './Appbar'
import Cards from './Cards'
export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    const aboutPage = () => {
        navigate('/about')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/home')
        }
        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div style={{backgroundColor:"antiquewhite", height:"100vh"}}>
            <Appbar/>
            <Cards/>
        </div>
    )
}
