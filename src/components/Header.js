import React from 'react'
import start from '../images/start.png'
import end from '../images/end.png'
import '../style/header.css'

export default function Header(){
    return(
        <div className='head'>
            <img src={start} alt="" className='Header--image1'/>
            <h2 className='Header--t1'>TESTIMONIAL</h2>
            <h1 className='Header--t2'>Our Awesome Clients</h1>
            <img src={end} alt="" className='Header--image2'/>
        </div>
    );
}