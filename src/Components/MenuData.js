import {MdHouse} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {MdHomeRepairService} from 'react-icons/md';
import {IoIosContact} from 'react-icons/io';



export const MenuData=[
    {
        title:"Home",
        url:"#",
        cName:"nav-links",
        path:'/',
        icon:<MdHouse/>
        
    },
    {
        title:"About",
        url:"#",
        cName:"nav-links",
        path:'/about',
        icon:<FcAbout/>
    },
    {
        title:"Service",
        url:"#",
        cName:"nav-links",
        path:'/service',
        icon:<MdHomeRepairService/>
    },
    {
        title:"Contact",
        url:"#",
        cName:"nav-links",
        path:'/contact',
        icon:<IoIosContact/>
    },
    {
        title:"Sign Up",
        url:"#",
        cName:"nav-links-mobile",
    }
];