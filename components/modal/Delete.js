import React from "react";

function DeleteModal({closeDeleteModal, handleDelete}) {
  return (
    <>
    <div className="flex flex-col items-center w-422">
    <button className="absolute close-modal-button"
        onClick={closeDeleteModal}
        >
            <img src="/img/close.svg" alt="" />
        </button>
        <div className="w-64-px mt-10 mb-10">
            <img src="/img/alert.svg" alt="" />
        </div>
        <h5 className="h5 text-green-primary font-semibold text-xl mb-2">Are you sure you want to delete?</h5>
        <h6 className="h6 text-xs mb-6">This action cannot be undone</h6>
        <div className="flex mb-10">
            <button className="delete-button mr-4 font-semibold"
            onClick={handleDelete}
            >Yes, Delete</button>
            <button onClick={closeDeleteModal} className="cancel-button font-semibold">No, Cancel</button>
        </div>

    </div>
    </>
  );
}

export default DeleteModal;
