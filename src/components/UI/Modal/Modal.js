import React, { Component } from 'react';

import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalCLosed}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;