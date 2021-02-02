import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

const NavBar = (props) => {

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }, [])



  return (
    <div >
      <nav >
        <div style={{ fontSize: "20px", fontWeight: "bolder", color: "grey" }} className="nav-wrapper pink lighten-4" >
          <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

          <ul id="nav-mobile" className="left hide-on-med-and-down" style={{ color: "black" }} >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipe-types">Recipes</Link></li>
            <li><Link to="/food-stories">Food Stories</Link></li>
          </ul>

          <div style={{ position: 'absolute', marginLeft: "49%" }} >
            <img className="brand-logo" src="https://img.icons8.com/ios/50/fa314a/international-food.png" alt="food-icon" />
          </div>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/About-me">About </Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li><div className="user-view" style={{ position: "static" }} >
          <img className="brand-logo" src="https://img.icons8.com/ios/50/fa314a/international-food.png" alt="food-icon" />
        </div></li>
        <li className="sidenav-close" ><Link to="/">Home</Link></li>
        <li className="sidenav-close" ><Link to="/recipe-types">Recipes</Link></li>
        <li className="sidenav-close" ><Link to="/food-stories">Food Stories</Link></li>
        <li className="sidenav-close" ><Link to="/About-me">About </Link></li>
        <li className="sidenav-close" ><Link to="/contact">Contact</Link></li>
      </ul>


    </div>
  )
}

export default NavBar

