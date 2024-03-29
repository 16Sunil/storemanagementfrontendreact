import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
//import logo from "../images/e_logo.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg custom-bg text-color">
        <div class="container-fluid text-color">
          <img
            src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
            width="35"
            height="35"
            class="d-inline-block align-top"
            alt=""
          />
          <Link to="/" class="navbar-brand">
            <i>
              <b className="text-color">Ama Dokan</b>
            </i>
          </Link>

          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color">Contact Us</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
