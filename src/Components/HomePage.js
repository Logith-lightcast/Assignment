import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
    return (
      <div>
        <header>
          <h1>Demo</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
  
        <main>
          <section>
            <h2>Welcome to Our Home Page</h2>
            <p>This is the main content of the home page.</p>
          </section>
        </main>
  
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  

export default HomePage;