import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const AboutMe = (props) => {

  useEffect(() => {
    let elems = document.querySelector('.carousel');
    let instances = M.Carousel.init(elems, {});
  }, [])

  return (
    <div>
      <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5.3vh", margin: "0 auto", gridColumnGap: "2rem" }}>

        <section style={{ marginRight: "10%", marginTop: "12%" }}>
          < div class="carousel" >
            <a class="carousel-item" href="#one!"><img src="https://i.imgur.com/mJzggTA.jpg" style={{ width: "130%" }} /></a>
            <a class="carousel-item" href="#two!"><img src="https://i.imgur.com/ua1AIAy.jpg" style={{ width: "130%" }} /></a>
            <a class="carousel-item" href="#three!"><img src="https://i.imgur.com/L20vNNL.jpg" style={{ width: "130%" }} /></a>
            <a class="carousel-item" href="#four!"><img src="https://i.imgur.com/BTwFSzC.jpg" style={{ width: "130%" }} /></a>
            <a class="carousel-item" href="#five!"><img src="https://i.imgur.com/xEPdRU4.jpg" style={{ width: "130%" }} /></a>
            <a class="carousel-item" href="#five!"><img src="https://i.imgur.com/XqYZMkg.jpg" style={{ width: "130%" }} /></a>
            <a class="carousel-item" href="#five!"><img src="https://i.imgur.com/7t7zEpQ.jpg" style={{ width: "130%" }} /></a>

          </div >

        </section>
        <section className="contact-email" style={{ marginTop: "32px" }}>
          <h4> Who is the Dutch chef?</h4>
          <p>
            The Dutch chef is a software engineer, with a +10 year background in the Culinary industry.
          </p>
          <p>
            Her mom taught her most of her cooking skills and her family exposed her to food on daily base, and with that her passion for cooking (and eating) grew.
            From the Netherlands she started her international career in New York City at the 1 Michelin star Italian restaurant Del Posto. After her 1 year experience of top level culinary interaction her passion for the hospitality and people grew and she worked as a Food and Beverage manager at the Waldorf Astoria and the Peninsula Hotel New York.
          </p>
          <p>
            As time passed, Lisa always loved technology and video games and she decided that she wanted to cook for her loved ones and enjoy dinning experiences as a ‘hobby’ and wanted to become a software engineer.
            With these new skills, Lisa is so happy to share that she can now do her two passions at the same time. She can cook for family and friends, code, and share her culinary experiences on her own created website ‘the Dutch Chef’.
          </p>

        </section>
      </div>
    </div>
  )
}

export default AboutMe

