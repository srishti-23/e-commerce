import React from 'react'
import './App.css'
import backgroundImage from '../src/images/composition-black-friday-shopping-cart-with-copy-space.jpg';



function Home() {
  return (
    <div   style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      /* Additional styling if needed */
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
     <h1 className='bg-text'>Come Shop with us!</h1>
   
    </div>
  );
}

export default Home;