
const Modal = (modal,onclose,type,onAction) => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
{
    modal&&(
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Confirm </h3>
    <p className="py-4">Are you confirm {type}</p>
    <div className="modal-action">
      <form method="dialog" className="flex justify-between">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick={onclose}>Close</button>
        <button className="btn" onClick={onAction}>OK</button>
      </form>
    </div>
  </div>
</dialog>
    )
}
        </div>
    );
};

export default Modal;