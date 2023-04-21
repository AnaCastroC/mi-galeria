import React from 'react';

const Header = (props) => {
   return( 
   <div className='text-center bg-info p-2 bg-opacity-10 text-center'>
        <h1>{props.title}</h1>
   </div> 
);
}

export default Header;
