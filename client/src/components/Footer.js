import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo2.png";

const Footer = () => {
    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
              <Link to={'/'} className="footer-logo"><img src={logo} /></Link>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Chatbot
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer;