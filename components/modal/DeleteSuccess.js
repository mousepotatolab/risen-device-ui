import React from "react";

function DeleteSuccessModal({closeSuccessModal}) {
  return (
    <>
    <div className="flex flex-col items-center w-422">
        <div className="w-64-px mt-10 mb-10">
            <img src="/img/alertSuccess.svg" alt="" />
        </div>
        <h5 className="h5 text-green-primary font-semibold text-xl mb-2">Your account has been permanently deleted.</h5>
        <h6 className="h6 text-xs mb-6">This action cannot be undone</h6>
        <div className="flex mb-10">
            <button className="delete-button mr-4 font-semibold"
            onClick={closeSuccessModal}
            >Continue</button>
        </div>

    </div>
    </>
  );
}

export default DeleteSuccessModal;