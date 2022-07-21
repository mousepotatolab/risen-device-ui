import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { getToken, saveDocuments } from "../../services/UserService";
import { baseapiurl } from "services/config";
const axios = require("axios");
import Modal from "react-modal";
import DeleteModal from "./Delete";

const fileTypes = ["JPG", "PNG", "PDF"];

function UploadDocumentModal({ closeDocumentModal, files, setFiles, error }) {
  const customStyles = {
      content: {
        top: "66px",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgb(247, 247, 247)",
        padding: "0",
        overflow: "visible",
        maxWidth: "843px",
      },
      overlay: {
        backgroundColor: "rgba(0,0,0,.5)",
      },
  };
  Modal.setAppElement("#__next");
  const [renderkey, setRenderkey] = useState("1");
  const [editIndex, setEditIndex] = useState(null)
  const handleChange = (file) => {
    console.log(file, "qq")
    let type = file.type.split("/");
    type = type[1];
    if (!fileTypes.includes(String(type).toUpperCase())) {
      error("File type is not supported");
      return;
    }

    const size = file.size / (1024 * 1024);
    console.log(size, "klkl")
    if (size > 25) {
      error("File size exceeded limit 25mb");
      return;
    }
    files = files ? files : []
    const index = files.length;
    files.push({index, file, uploading: true, percentage: 0});
    fileUploadApi(file, index)
    setFiles([...files]);
    console.log(files);
    setRenderkey(new Date().valueOf())
  };

  const fileUploadApi = async (file, index) => {
    const headers = {};
    const url = baseapiurl + `user/upload-medical-document`;
    const formData = new FormData();
    formData.append("image", file);
    const token = await getToken();
    console.log(token, "lll")
    if (token) {
        headers["risen-access-token"] = token;
        headers["Content-Type"] = "multipart/form-data";
    }
    const data = await axios.post(
        url,
        formData,
        {
          headers,
          onUploadProgress: (p) => {
            const percentage = parseInt(String((p.loaded/p.total) * 100));
            files[index].percentage = percentage;
            if (percentage == 100) {
              files[index].uploading = false;
            }
            setFiles([...files]);
            setRenderkey(new Date().valueOf())
          },
        }
        
    );
    if ("success" in data.data && data.data.id) {
      files[index].id = data.data.id;
    }
  }


  const saveDocument = () => {
    console.log(files);
    if (files.length == 0) {
      error("No File Found");
      return false;
    }
    const data = files.map(p => {
      return {id: p.id, title: p.title};
    })
    saveDocuments({items: data}).then(p => {
      if (p.success) {
        setFiles([]);
        setRenderkey(new Date().valueOf())
        closeDocumentModal();
      } else {
        error(p.message)
      }
    })
  }

  const removeFile = () => {
    files.splice(deleteIndex, 1);
    setFiles([...files]);
    setRenderkey(new Date().valueOf())
    closeModal();
    setDeleteIndex(null);
  };

  const setEdit = (i) => {
    console.log(i, "klkl")
    setEditIndex(i);
    setRenderkey(new Date().valueOf())
  }

  const setFileTitle = (e) => {
    const value = e.target.value;
    if (value) {
      files[editIndex].title = e.target.value;
      setEditIndex(null);
      setRenderkey(new Date().valueOf())
    } else {
      error("File name can not be empty")
    }
  }

  const [deleteDocumentModal, setDeleteDocumentModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const closeModal = () => {
    setDeleteDocumentModal(false);
  }

  const openModal = (index) => {
    setDeleteIndex(index)
    setDeleteDocumentModal(true);
  }


  return (
    <>
      <Modal
            isOpen={deleteDocumentModal}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Delete Item Modal"
            // className="Modal"
            // overlayClassName="Overlay"
        >
            <DeleteModal
                closeDeleteModal={closeModal}
                handleDelete={removeFile}
            />
        </Modal>
      <div key={renderkey} className="flex w-full justify-between connect-modal relative">
        <button className="absolute close-modal-button"
          onClick={closeDocumentModal}
        >
          <img src="/img/close.svg" alt="" />
        </button>
        <div className="card w-full  p-connect fb-423 relative">
          <h6 className="text-md font-medium text-green-primary mb-1">Upload Documents</h6>
          <h6 className="text-sm font-regular mb-4">png, jpeg and pdf files are allowed</h6>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes}>

            <div className="upload-card flex flex-col justify-center items-center w-343">
              <label for="document">

                <input id="document" type="file" style={{ "display": "none" }} />
                <img src="/img/upload.svg" className="mt-6 w-60px cursor-pointer" alt="" />
              </label>
              <h6 className="h6 text-xs mt-4">Drag and drop or browse to upload</h6>
              <h6 className="h6 text-xs mt-2 mb-8 text-green-primary">Max file size 25MB</h6>
            </div>
          </FileUploader>

          <h6 className="h6 text-xs mt-6 mb-2">{files && files.filter(p => !p.uploading).length } of {files && files.length} files uploaded</h6>
          
          {files && files.map((p, i) => (
          <>
          {editIndex != i && (<div className="flex relative">
            <div onClick={() => setEdit(i)} className={"uploaded-document w-full text-xs " + (p.uploading ? "uploading" : "")}>
              {p.title ? p.title : p.file.name}
            </div>
            <div onClick={() => setEdit(i)} className="percentage" style={{ width: p.percentage + '%'}}></div>
            <img onClick={() => openModal(i)} src="/img/closeSolidBlack.svg" className="absolute close-document" alt="" />
          </div>)}
          {editIndex == i && (<div className="flex relative">
             <input type="text"
             onBlur={setFileTitle}
             className={"uploaded-document-edit w-full"} />
             <img onClick={() => openModal(i)} src="/img/closeSolidBlack.svg" className="absolute close-document" alt="" />
          </div>)}
          </>
          ))}
          <h5 className="h5 mt-12 font-normal upload-title">After upload click to add a title to your documents</h5>
          <h6 className="h6 mt-1 text-xs font-grey text-center">Title will help to clarify the purpose of the document</h6>
          <button
            className="py-4  w-343 text-md font-bold mt-8 bg-primary button-shadow disabled:bg-inactive relative center border-r-4"
            onClick={saveDocument}
          >Save</button>
        </div>
      </div>
    </>
  );
}

export default UploadDocumentModal;
