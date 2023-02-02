import React from 'react'
import Company1 from '../Assests/cmn1.png'
import Company2 from '../Assests/cmn2.png'
import Company3 from '../Assests/cmn3.png'
import Company4 from '../Assests/cmn4.png'


const Company = () => {
    return (


        <
        div className = 'work-section-wrapper' >
        <
        div className = 'work-section-top' >
        <
        div className = "container text-center" >
        <
        div className = "row" >
        <
        div className = "col" >
        <
        img src = { Company1 }
        alt = "" / >
        <
        /div> <div className = "col" > <
        img src = { Company2 }
        alt = "" / >
        <
        /div> <
        div className = "col" >
        <
        img src = { Company3 }
        alt = "" / >
        <
        /div> <
        div className = "col" >
        <
        img src = { Company4 }
        alt = "" / >
        <
        /div> < /
        div > <
        /div> < /
        div > <
        /div>

    )
}

export default Company