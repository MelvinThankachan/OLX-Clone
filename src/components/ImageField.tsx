import React, { useState, useRef } from "react";
import Camera from "../assets/icons/Camera";
import Close from "../assets/icons/Close";

const ImageField: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Trigger file input click
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Set the image URL to state
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  };

  return (
    <div className="border border-primary border-opacity-50 w-52 h-52 transition flex flex-col items-center justify-center relative">
      <input
        type="file"
        name="image"
        accept="image/*"
        required
        ref={fileInputRef}
        className="hidden" // Hide the file input
        onChange={handleFileChange}
      />
      {!image ? (
        <>
          <button
            type="button"
            onClick={handleButtonClick}
            className="flex flex-col items-center justify-center w-full h-full focus:outline focus:outline-[#00a49f]"
          >
            <Camera className="w-9 fill-primary" />
            <span className="text-sm ">Add Photo</span>
          </button>
        </>
      ) : (
        <div className="w-full h-full">
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-contain bg-black"
          />
          <div
            className="absolute top-2 right-2 px-1 py rounded bg-secondary bg-opacity-50 hover:scale-110 z-10 cursor-pointer"
            onClick={() => setImage("")}
          >
            <Close className="w-3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageField;
