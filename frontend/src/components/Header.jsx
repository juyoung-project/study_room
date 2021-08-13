import { NavLink } from "react-router-dom";
import logo from "../assets/img/common/logo.png";
import KakaoSignUp from "./KakaoSignUp";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <NavLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
      </h1>
      <div className="top-menu">
        <NavLink to="/signin" className="btn sign-in">
          Sign in
        </NavLink>
        <NavLink to="/signup" className="btn border">
          Sign up
        </NavLink>
      </div>
    </header>
  );
}
