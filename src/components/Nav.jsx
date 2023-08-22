import React from 'react'
import {headerLogo} from '../assets/images'
import { jordanLogo } from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants'
const Nav = () => {

    const ham=(e)=>{

    }
  return (
    <header className='padding-x py-4  absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={jordanLogo} alt="LOGO"
                width={85}
                height={30} />
            </a>
            
            <ul className='flex-1 flex max-lg:flex-col  justify-center items-center gap-16 max-lg:hidden '>{navLinks.map((item)=>(
                <li key={item.label}>
                    <a 
                        href={item.href}
                        className='font-montserrat font-semibold hover:underline hover:underline-offset-8 leading-normal text-xl text-[#000000]'
                    >
                    {item.label}
                    </a>
                </li>
            ))}</ul>
            <div className='hidden max-lg:block'>
                <img 
                    src={hamburger} 
                    alt="" 
                    width={25}
                    height={25}
                    onClick={ham}/>
            </div>
        </nav>
        
    </header>
  )
}

export default Nav
