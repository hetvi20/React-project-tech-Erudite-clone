import React from 'react'
import Navbar from './Navbar'
import BannerBackgroundImage from '../Assests/BannerBackground.png'
import BannerImage from '../Assests/Team-cuate.png'
import EllipseImage from '../Assests/Ellipse.png'
import halfEllipseImage from '../Assests/Ellipsehalf.png'


const Home = () => {
    return (

        <
        div className = 'home-container' >
        <
        Navbar / >
        <
        div className = "home-banner-container" >
        <
        div className = 'home-bannerImage-container' >
        <
        img src = { BannerBackgroundImage }
        alt = "" / >
        <
        /div> <
        div className = "home-text-section" >
        <
        h1 className = 'primary-heading-about' >
        About Us <
        /h1> <
        p className = 'primary-text' >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, <
        /p> <
        /div> <
        div className = 'banner-ellipse' >
        <
        img src = { EllipseImage }
        alt = "" / >
        <
        /div> <
        div className = "home-image-container" >
        <
        img src = { BannerImage }
        alt = "" / >
        <
        /div> <
        div className = 'half-banner-ellipse' >
        <
        img src = { halfEllipseImage }
        alt = "" / >
        <
        /div> <
        /div> <
        /div>

    )
}

export default Home;