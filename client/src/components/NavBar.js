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

          <img style={{ verticalAlign: "middle" }} className="brand-logo" src="https://img.icons8.com/ios/50/fa314a/international-food.png" alt="food-icon" />
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/recipe-types">Recipes</Link></li>
            <li><Link to="/food-stories">Food Stories</Link></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/About-me">About Me </Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* </nav> */}

        <ul id="slide-out" className="sidenav">
          <li><div className="user-view" style={{ marginBottom: "35%", marginRight: " 15%" }} >
            <img className="brand-logo" src="https://img.icons8.com/ios/50/fa314a/international-food.png" alt="food-icon" />
          </div></li>
          <li ><Link to="/">Home</Link></li>
          <li><Link to="/recipe-types">Recipes</Link></li>
          <li><Link to="/food-stories">Food Stories</Link></li>
          <li><Link to="/About-me">About Me </Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar

//recipe details to be delete from Nav


  // < div className = "navbar-fixed" >
  //   <nav >
  //     <div style={{ fontSize: "20px", fontWeight: "bolder", color: "grey" }} className="nav-wrapper pink lighten-4" >
  //       <img style={{ verticalAlign: "middle" }} className="brand-logo" src="https://img.icons8.com/ios/50/fa314a/international-food.png" alt="food-icon" />
  //       <ul id="nav-mobile" className="left hide-on-med-and-down">
  //         <li ><Link to="/">Home</Link></li>
  //         <li><Link to="/recipe-types">Recipes</Link></li>
  //         <li><Link to="/food-stories">Food Stories</Link></li>
  //       </ul>
  //       <ul id="nav-mobile" className="right hide-on-med-and-down">
  //         <li><Link to="/About-me">About Me </Link></li>
  //         <li><Link to="/contact">Contact</Link></li>
  //       </ul>
  //     </div>
  //   </nav>
  //   </div >