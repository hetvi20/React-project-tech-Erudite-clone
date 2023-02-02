import React from 'react'
import VisionImage from '../Assests/vision.png'
import VisionbgImage from '../Assests/visionbg.png'

const Vision = () => {
    return ( <
        >
        <
        div className = 'about-section' >

        <
        div className = "container overflow-hidden text-center" >

        <
        div className = "row gx-5" >
        <
        div className = "col" >
        <
        div className = "p-4" >
        <
        img src = { VisionImage }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "col" >
        <
        div className = "p-4" >

        <
        div className = "mission-text" >
        <
        h2 > Our Vision < /h2> <
        /div> <
        div className = "about-subtext" >
        <
        p > We believe in serving quality services which can meet customersrequirements.Our vision is to bring out the best in people, technology andprocesses with top - notch quality.We build customer experience.Our mission is to place a consistent innovation to bring about an ultimate crest of triumph as our service. < /p> <
        /div>

        <
        /div> <
        div className = "Vision-image" >
        <
        img src = { VisionbgImage }
        alt = "" / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default Vision;