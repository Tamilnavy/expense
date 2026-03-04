import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [preview, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div
          className="w-24 h-24 flex items-center justify-center bg-slate-50 border-2 border-dashed border-indigo-200 rounded-full relative cursor-pointer hover:bg-slate-100 transition-colors shadow-sm"
          onClick={onChooseFile}
        >
          <LuUser className="text-4xl text-indigo-400" />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full absolute bottom-0 right-0 shadow-md shadow-indigo-500/30 transition-colors"
            onClick={(e) => { e.stopPropagation(); onChooseFile(); }}>
            <LuUpload size={14} />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={preview}
            alt="profile photo"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white rounded-full absolute bottom-0 right-0 shadow-md shadow-rose-500/30 transition-colors"
            onClick={handleRemoveImage}
          >
            <LuTrash size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
