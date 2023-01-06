import React from 'react'
import './Header.css'
import {apple} from '../../../public/images/apple.png'
export default function Header() {
  return (
    <>
        <div className='header flex'>
            <nav>
                <div className='logo'>
                    <img src={apple} alt=" Blog Logo " />
                </div>
                <ul>
                    <li>
                        Home 
                    </li>
                    <li> About</li>
                    <li> Test </li>
                    <li> Test-2</li>
                </ul>
            </nav>
        </div>
    </>
  )
}
