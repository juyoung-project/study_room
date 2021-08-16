import { NavLink } from "react-router-dom";
import logo from "../assets/img/common/logo-text.png";

export default function Footer() {
  const developer = [
    {
      name: "Lee Do Hyun",
      part: "Design, Front-end",
      email: "6enevolentroad@gmail.com",
    },
    {
      name: "Kim Joo Young",
      part: "Back-end",
      email: "wndud8830@naver.com",
    },
  ];
  const developerList = developer.map((developer) => (
    <>
      <dt>{developer.name}</dt>
      <dd>{developer.part}</dd>
      <dd>{developer.email}</dd>
    </>
  ));

  return (
    <footer id="footer">
      <div>
        <div className="footer-title">
          <h1>
            <NavLink to="/">
              <img src={logo} className="logo" alt="logo" />
            </NavLink>
          </h1>
          <ul>
            <li>
              <a
                href="https://www.notion.so/Study_Room-3e04d56cca964bf587c082ea02aa4d8b"
                target="_blank"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="https://github.com/juyoung-project/study_room"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <dl>{developerList}</dl>
        <p>By using React, Django, PostgreSQL, Redis, AWS</p>
        <p className="copyright">
          Copyright 2021. studyroom, All rights reserved
        </p>
      </div>
    </footer>
  );
}
