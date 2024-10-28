import React from "react";

function Alert(props) {
    const capitalized =(word)=>{
        return( word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
  return (
    props.alert&&<>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show alert-dismissible fade show`}
        role="alert"
      >
        <b>{capitalized(props.alert.type)} : </b>{props.alert.msg}
        
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </>
  );
}

export default Alert;
