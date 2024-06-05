/* eslint-disable react/prop-types */

const Toast = ({ isOpen ,children}) => {
   
  return (
    <div className={`${isOpen?"visible":"invisible"}`}>
      <div className="toast toast-top toast-end">
        <div className="alert alert-info">
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
