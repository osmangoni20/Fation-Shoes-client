/* eslint-disable react/prop-types */

const Toast = ({ children,isOpen }) => {
    console.log(isOpen)
    
  return (
    <div className={`${isOpen?"visible":"invisible"}`}>
      <div className={`toast toast-top toast-end`}>
        <div className="alert alert-info">
          <span>{children}</span>
        </div>
        {/* <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div> */}
      </div>
    </div>
  );
};

export default Toast;
