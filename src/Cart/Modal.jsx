import React, { Fragment  } from 'react'
import classes from "./Modal.module.css"
import ReactDOM  from 'react-dom';

const Backdrop = (props)=>{
    return(<div className={classes.modalBackdrop} onClick={props.onHide}></div>)
}
const Overlay = (props)=>{
    return(
    <div className={classes.modalOverlay}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )
}


const Modal = (props) => {

    
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onHide={props.onHide} /> , document.getElementById('overlays'))}

        {ReactDOM.createPortal(<Overlay>
            {props.children}</Overlay> , document.getElementById('overlays')
        )}

    </Fragment>
  )
}

export default Modal