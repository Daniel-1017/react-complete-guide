import { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalsElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalsElement)}
      {ReactDom.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalsElement
      )}
    </Fragment>
  );
};

export default Modal;
