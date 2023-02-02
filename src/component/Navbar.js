import React from 'react'
import Logo from "../Assests/site-logo.png";
import { BsCart2, BsSearch, BsToggle2On, BsToggles, BsToggles2 } from "react-icons/bs";
import { HiOutlineBars3 } from 'react-icons/hi2';
import { useState } from 'react';
import { box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/icons-material/Home";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import MessageRoundedIcon from "@mui/icons-material/MessageRounded"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import ToggleRoundedIcon from "@mui/icons-material/ToggleOffRounded"

// code by Hetvi

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [{
            text: "Home",
            icon: < HomeIcon / >
        },
        {
            text: "What we do",
            icon: < InfoIcon / >
        },
        {
            text: "Hire Expert",
            icon: < CommentRoundedIcon / >
        },
        {
            text: "Company",
            icon: < InfoIcon / >
        },
        {
            text: "Say Hello",
            icon: < MessageRoundedIcon / >
        },
        {
            text: "Search",
            icon: < SearchRoundedIcon / >
        }
    ]
    return ( <
        nav >
        <
        div className = "nav-logo-container" >
        <
        img src = { Logo }
        alt = "" / >
        <
        /div> <
        div className = "navbar-links-container" >
        <
        a href = "" > Home < /a> <
        a href = "" > What we do </a> <
            a href = "" > Hire Expert < /a> <
            a href = "" > Company < /a> <
            a href = "" > Say Hello < /a> <
            a href = "" >
            <
            BsSearch className = "navbar-Search-icon" / >
            <
            /a> <
            a href = "" >
            <
            BsToggles2 className = "navbar-Search-icon" / >
            <
            /a>

        <
        /div>     <
        div className = "navbar-menu-container" >
        <
        HiOutlineBars3 onClick = {
            () => setOpenMenu(true) }
        /> <
        /div>

        <
        /nav>
    )
}

export default Navbar;