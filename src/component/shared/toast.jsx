
const toast = ({ message }) => {
  return (
    <div>
      <div className="toast toast-top toast-end">
        <div className="alert alert-info">
          <span>{message}</span>
        </div>
        {/* <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div> */}
      </div>
    </div>
  );
};

export default toast;
