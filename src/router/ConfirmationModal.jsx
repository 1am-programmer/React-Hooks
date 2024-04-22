import React, {
  useImperativeHandle,
  useRef,
  //We need the useRef to make references to the buttons
} from "react";

function ConfirmationModal({ isOpen, onClose }, ref) {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle;

  if (!isOpen) return null;

  return (
    <div className="modal" ref={ref}>
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1 className="p-5">Title</h1>
      </div>

      <div className="modal-body">Do you confirm</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button className="deny-btn" ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}

export default React.forwardRef(ConfirmationModal);
