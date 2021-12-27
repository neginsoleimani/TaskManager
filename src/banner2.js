import React from 'react';
import LandingPage from './landingPage';
import Image from './images/casual-life-3d-likes-7.png'
import {Link } from 'react-router-dom';


const banner2 = () => {
    document.body.style.background="rgb(159, 232, 212)";
    return (
        <div>
        <LandingPage  width={"300px"} image={Image}  alt={"image1"} title={"Boost Your Daily Productivity"}  description={"Track and limit how much time you’re Spending on tasks"}/>
        <div style={{textAlign:"right",marginTop:"23%"}}>
        <Link to="/next3" className='nextbtn' style={{backgroundColor:"#7d8fff"}}><i class="bi bi-arrow-right" style={{color:"#fff"}}></i></Link>
        </div>
        </div>
    );
};

export default banner2;