import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    
    <nav className='bg-[#0000009e] navbar'>
    <ul className='flex gap-9 justify-center'>
      <li> <Link to=""> Home </Link> </li>
      <li> 
        <Link to=""> About </Link>  
        <ul>
          <li> <Link to=""> Sub About </Link>   </li>
          <li> <Link to=""> Sub About </Link>   </li>
        </ul>
      </li>
      <li> 
        <Link to=""> Administration </Link> 
        <ul>
          <li> <Link to=""> Sub Administration </Link>   </li>
          <li> <Link to=""> Sub Administration </Link>   </li>
        </ul>
      </li>
      <li> 
        <Link to=""> Teachers </Link> 
        <ul>
          <li> <Link to=""> Sub Teachers </Link>   </li>
          <li> <Link to=""> Sub Teachers </Link>   </li>
        </ul>
      </li>
      <li> 
        <Link to=""> Academics </Link> 
        <ul>
          <li> <Link to=""> Sub Academics </Link>   </li>
          <li> <Link to=""> Sub Academics </Link>   </li>
        </ul>
      </li>
      <li> 
        <Link to=""> Results </Link> 
        <ul>
          <li> <Link to=""> Sub Results </Link>   </li>
          <li> <Link to=""> Sub Results </Link>   </li>
        </ul>
      </li>
      <li> 
        <Link to=""> Gallery </Link> 
        <ul>
          <li> <Link to=""> Sub Gallery </Link>   </li>
          <li> <Link to=""> Sub Gallery </Link>   </li>
        </ul>
      </li>
      <li> <Link to=""> Contacts </Link> </li>              
    </ul>
  </nav>

  )
}
