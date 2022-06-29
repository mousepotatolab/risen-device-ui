import React, {useState} from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "PDF"];

function UploadDocumentModal({closeDocumentModal, saveDocument}) {

    const [file, setFile] = useState(null);

    const handleChange = (file) => {
        setFile(file);
    };

  return (
    <>
      <div className="flex w-full justify-between connect-modal relative">
      <button className="absolute close-modal-button"
        onClick={closeDocumentModal}
        >
        <img src="/img/close.svg" alt="" />
        </button>
        <div className="card w-full  p-connect fb-407 relative">
        <h6 className="text-md font-medium text-green-primary mb-1">Upload Documents</h6>
        <h6 className="text-sm font-regular mb-4">png, jpeg and pdf files are allowed</h6>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}>

        <div className="upload-card flex flex-col justify-center items-center w-343">
            <label for="document">

            <input id="document" type="file" style={{"display":"none"}}/>
            <img src="/img/upload.svg" className="mt-6 w-60 cursor-pointer" alt="" />
            </label>
            <h6 className="h6 text-xs mt-4">Drag and drop or browse to upload</h6>
            <h6 className="h6 text-xs mt-2 mb-8 text-green-primary">Max file size 25MB</h6>
        </div>
        </FileUploader>

        <h6 className="h6 text-xs mt-6 mb-2">3 of 3 files uploaded</h6>
        <div className="flex relative">

        <div className="uploaded-document w-full text-xs">this_is_a_document_title_01.png</div>
        <img src="/img/close.svg" className="absolute close-document" alt="" />
        </div>
        <div className="flex relative">

        <div className="uploaded-document w-full text-xs">this_is_a_document_title_02.png</div>
        <img src="/img/close.svg" className="absolute close-document" alt="" />
        </div>
        <div className="flex relative">

        <div className="uploaded-document w-full text-xs">this_is_a_document_title_03.png</div>
        <img src="/img/close.svg" className="absolute close-document" alt="" />
        </div>
        <h5 className="h5 mt-12 font-normal upload-title">After upload click to add a title to your documents</h5>
        <h6 className="h6 mt-1 text-xs font-grey text-center">Title will help to clarify the purpose of the document</h6>
        <button 
            className="py-4  w-343 text-md font-bold mt-8 bg-primary disabled:bg-inactive relative center border-r-4" 
            onClick={saveDocument}
            >Save</button>
        </div>
      </div>
    </>
  );
}

export default UploadDocumentModal;
