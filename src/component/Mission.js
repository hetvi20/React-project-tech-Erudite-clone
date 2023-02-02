import React from 'react'
import missiongroupImage from '../Assests/missiongroup.png'
import missionImage from '../Assests/Mission.png'

const Mission = () => {
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
        div className = "mission-text" >
        <
        h2 > Our Mission < /h2> <
        /div> <
        div className = "about-subtext" >
        <
        p > Our tech mind offers expert, creative, scalable & high - quality solutions that fulfill your all requirements.We act ethically, deliver excellent solutions, respect your contribution.With nurturing trust, we analyze your requirements; put our heads into it to exceed customers’ expectations.We offer best - suited services which fetch mutually profitable experience. < /p> <
        /div> <
        /div> <
        /div> <
        div className = "col" >
        <
        div className = "p-4" >
        <
        img src = { missiongroupImage }
        alt = "" / >
        <
        /div> <
        /div>

        <
        div className = "mission-image" >
        <
        img src = { missionImage }
        alt = "" / >
        <
        /div>

        <
        /div> <
        /div> <
        /div> <
        />
    )
}

export default Mission