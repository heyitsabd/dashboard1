import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS for styling
import { AiOutlineHome } from "react-icons/ai";
import Home from './Home';
function Nav() {
    
  

  return (
    <div className="App">
      <div className="container-fluid" >
        <div className="row">
          {/* Sidebar */}
          <nav id="sidebar" className="col-md-3 col-lg-2 nav_bar_styling" >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active " href="#"> 
                    <AiOutlineHome/>Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                   
                    Customers
                 
                  </a>
                </li>
                
              </ul>
          </nav>
          
          {/* Main content */}
          {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}
            {/* Your content goes here */}
            {/* <h1>Dashboard</h1> */}
            {/* Additional content */}
          {/* </main> */}
          <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 text1" > Dashboard 
          <Home/>
          </section>
          
        </div>
      </div>
    </div>
  );
}

export default Nav;
