import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
              <Link to={'/'} className="footer-logo"><img src={logo} /></Link>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text have-question">Still have questions?</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="mailto:neli.zarkova@abv.bg">E-mail: neli.zarkova@abv.bg</a></li>
                  <li><a class="grey-text text-lighten-3" href="tel:0899520719">Phone: +359 899 520 719</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Connect
            </div>
          </div>
        </footer>
    )
}

export default Footer;