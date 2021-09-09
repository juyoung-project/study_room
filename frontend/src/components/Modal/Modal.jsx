import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { isOpen, close, title, button, isbuttonlong } = props;

  useEffect(() => {
    isOpen
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "auto");
  });

  return (
    <div className={isOpen ? "on modal" : "modal"}>
      {isOpen ? (
        <>
          <div className="card">
            <header>
              <h2 className="title">{title}</h2>
              <button onClick={close} className="close-modal">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </header>
            <main>
              <form action="#">{props.children}</form>
            </main>
            <footer>
              <button
                className={
                  "btn brand-color short" +
                  (isbuttonlong ? " wide" : " regular-w")
                }
              >
                {button}
              </button>
            </footer>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
