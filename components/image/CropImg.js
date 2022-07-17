import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './GetCroppedImg';

const CropImg = ({ imgData, crop, rotation, zoom, setCrop, setRotation, setZoom, setCroppedAreaPixels, setCropModal, setCroppedImage,
  croppedAreaPixels }) => {
  
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const cancel = () => {
    setCropModal(false)
  }

  const next = async () => {
      try {
        const croppedImage = await getCroppedImg(imgData, croppedAreaPixels);
        if (croppedImage) {
          setCroppedImage(croppedImage);
        } 
      } catch (e) {
        console.log(e, "kiki")
      }
  }

  return (
    <div>
      <div className='crop-container mb-3'>
        <Cropper
          image={imgData}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={4 / 4}
          cropSize={{ width: 200, height: 200 }}
          cropShape='round'
          minZoom={0.1}
          showGrid={false}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
        <div className='btn-container'>
          <button className="delete-image-button mh-40" onClick={cancel}>Cancel</button>
          <button className="delete-image-button mh-40 next" onClick={next}>Next</button>
        </div>
        
      </div>
    </div>
  );
};

export default CropImg;
