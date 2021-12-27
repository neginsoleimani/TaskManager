import React from 'react';
import LandingPage from './landingPage';
import Image from './images/casual-life-3d-reading-5.png'
import {Link } from 'react-router-dom';

const banner3 = () => {
    document.body.style.background="#7d8fff";
    return (
        <div>
        <LandingPage  width={"300px"} image={Image}  alt={"image1"} title={"Be proactive, not reactive"}  description={"Set aside time for responding to emails,But don’t let them determine what your day is going to look like."}/>
        <div style={{textAlign:"right",marginTop:"23%"}}>
        <Link to="/next3" className='nextbtn' style={{backgroundColor:"#fff"}}><i class="bi bi-arrow-right" style={{color:"#7d8fff"}}></i></Link>
        </div>
        </div>
    );
};

export default banner3;