import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const LandingPage = (props) => {

  useEffect(() => {
    let elems = document.querySelector('.carousel');
    let instances = M.Carousel.init(elems, {});
  }, [])

  return (
    <div>
      <h3 style={{ marginBottom: "0px" }}> Welcome to the Dutch Chef!</h3>
      <div class="carousel" >
        <a class="carousel-item" href="#one!"><img src="https://i.imgur.com/eXOA6Iy.png" /></a>
        <a class="carousel-item" href="#two!"><img src="https://i.imgur.com/OD0PR9d.png" /></a>
        <a class="carousel-item" href="#three!"><img src="https://i.imgur.com/yqKktwG.png3" /></a>
        <a class="carousel-item" href="#four!"><img src="https://i.imgur.com/yIsfdnv.png" /></a>
        <a class="carousel-item" href="#five!"><img src="https://i.imgur.com/ozBfUqs.jpg" /></a>
        <a class="carousel-item" href="#five!"><img src="https://i.imgur.com/ir01kAA.png" /></a>
        <a class="carousel-item" href="#five!"><img src="https://i.imgur.com/vMwRsl8.jpg" /></a>

      </div>
      <section style={{ margin: "2% 20% 20%", marginBottom: "2%" }}>
        <div >
          The Dutch Chef is your site to find tasty recipes to make at home and read food stories from mainly New York.
          Besides finding recipes and stories, The Dutch Chef was created to inspire the joy of cooking (and eating) together with your familiy and friends.
        </div>
        <p> Now - let's get our hands dirty, experiment with ingredients, make food you want to eat and let's create some food memories. </p>
      </section>
    </div>
  )
}

export default LandingPage