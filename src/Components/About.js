import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Photo from './Photo.jpeg'
import './About.css'
import Appbar from './Appbar'
export default function About() {
    
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/about')
            
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div style={{backgroundColor:"antiquewhite"}}>
            <Appbar/>
            <br/>
            <br/>
          <h3 style={{float:"left", margin:"1%", color:"red"}} >
          My dearest Tanishka,
          </h3>
          <div >
            <img style={{width:"100%"}} src ={Photo} alt = "Photo" />
          </div>
<br/>
<br/>
<p className='text-on-image'>
Your beauty is like a radiant sun that brightens up my world every single day.


Your eyes are like pools of stars, sparkling with a beauty that mesmerizes me.


Your smile is like a ray of sunshine that warms my heart and fills me with joy.
<br></br>
Every time I look at you, I am in awe of your beauty.
<br></br> Your graceful movements, your gentle voice, and your kind heart are all a reflection of your inner beauty that shines through your every action.
<br></br>
You are truly a gem, Tanishka, a rare and precious treasure that I cherish with all my heart. 
<br></br>I am so grateful to have you in my life, and I will always be in awe of your beauty, inside and out.
<br></br>
<br></br>
</p>
<h4 style={{float:"left", margin:"1%", color:"red"}}>With love and admiration,</h4>
<br></br>
<br></br>
<h1 style={{float:"left", margin:"1%", color:"red"}}>Roy</h1>
        
        </div>
    )
}
