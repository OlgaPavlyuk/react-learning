import React from 'react';
import { Link  } from 'react-router-dom';

function MainContent() {
  return (
    <div className="container">
      <nav className="">
        <ul className="">
          <li className="">
            <Link to='/' className="">Home</Link>
          </li>
          <li className="">
            <Link to='/cards/' className="">All cards</Link>
          </li>
          <li className="">
            <Link to='/learn/' className="">Learn</Link>
          </li>
          <li className="">
            <Link to='/elements/' className="">Elements</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainContent;