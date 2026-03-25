import React from 'react'
const Navbar= () =>{
    return(
        <nav className='flex justify-between p-6 bg-grey-800'>
            <h1>Akash</h1>
            <ul className='flex gap-6'>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">contect</a></li>
            </ul>

        </nav>
    );
}
export default Navbar;