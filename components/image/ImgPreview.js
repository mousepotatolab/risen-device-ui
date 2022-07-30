import React from 'react';

const ImgPreview = ({ croppedImage, setCropModal, setCroppedImage, updateImage, uploading }) => {

  const cancel = () => {
    setCropModal(false);
    setCroppedImage(null);
  }

  return (
    <div className='preview-container text-center '>
      <div className='final-img mx-auto mb-3'>
        <img src={croppedImage} height='144' alt='' />
      </div>
        {!uploading && <div className='btn-container'>
          <button className="delete-image-button mh-40" onClick={cancel}>Cancel</button>
          <button className="delete-image-button mh-40 next" onClick={updateImage}>Upload</button>
        </div>}
        {uploading && <div className='btn-container'>
          <button style={{width: '120px'}} className="delete-image-button mh-40 next">Uploading...</button>
        </div>}
    </div>
  );
};

export default ImgPreview;
