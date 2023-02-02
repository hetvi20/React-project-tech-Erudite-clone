import React from 'react'
import profilepicture from '../Assests/profile.png';
import Testimonial from '../Assests/TESTIMONAILS.png';



const Testimonal = () => {
    return ( <
        div className = 'work-section-wrapper' >
        <
        div className = "work-section-top" >
        <
        div className = "container text-center" >
        <
        div className = "testimonialbg" >
        <
        img src = { Testimonial }
        alt = "" / >
        <
        div className = "testimonal-heading" >
        <
        div className = "col-md-auto" >
        <
        h2 > Few Words From Our Clients < /h2> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "primary-text" >
        <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora ullam quasi possimus labore. < /p> <
        /div> <
        div className = "testimonial-section-bottom" >
        <
        img src = { profilepicture }
        alt = "" / >
        <
        h1 className = 'primary-heading-about' >
        Rehiam page <
        /h1>

        <
        /div> <
        /div>

        <
        /div>
    )
}

export default Testimonal