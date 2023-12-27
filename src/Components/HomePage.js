import React from 'react';
import './HomePage.css'; 
import Logo from '../Images/Logo.jpg';
import Home from '../Images/Home-Left.avif'


const HomePage = () => {
    return (
      <div>
        <header>
        <img src={Logo} alt="Description of the image" style={{ width: '235px', height: '38px' , marginLeft:'140px', marginTop:'20px'}}  />
          <nav>
            <ul>
              <li>SOLUTIONS</li>
              <li>ABOUT</li>
              <li>RESOURCES</li>
              <li>PRICING</li>
            </ul>
            <ol  className='left'>
            <li>Log in</li>
              <li >Contact</li>
              <li>US</li>
            </ol>
          </nav>
        </header>
  
        <main>
          <img src={Home} alt='Front page'  style={{width:'50%' ,float:'right', marginTop:'-14%'}}/>
          <h1 style={{fontSize:'50px', marginTop:'245px', marginLeft:'-70px'}}>A Global Leader in <br className='left1'/>Labout Market <br className='left2'/> Analytics</h1>
          <button style={{padding:'17px', backgroundColor:'rgb(245 69 98)', color:'white', fontSize:'20px', borderStyle:"none", marginLeft:'260px'}} >Contact Us Now </button>
        </main>
  
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  

export default HomePage;