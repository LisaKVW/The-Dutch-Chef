import React from 'react';

const Footer = (props) => {
  return (
    <footer className="page-footer" style={{ backgroundColor: "#f8bbd0", paddingTop: "0px" }}>
      <div className="footer-copyright" style={{ backgroundColor: "#f8bbd0", paddingBottom: "0px", paddingTop: "0px" }}>
        <div className="container" style={{ backgroundColor: "#f8bbd0", color: "black", fontSize: "15px" }}>
          <p> Open Source coded by Lisa Wand  -
          <a href="https://github.com/LisaKVW/the-Dutch-Chef"> GitHub | </a>
            <a href="https://www.linkedin.com/in/lisa-venneker-wand/"> LinkedIn </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer