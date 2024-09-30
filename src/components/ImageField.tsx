import React, { useState, useRef } from "react";
import { storage } from "../firebase/setup";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Camera from "../assets/icons/Camera";
import Close from "../assets/icons/Close";

interface ImageFieldProps {
  onImageUpload: (url: string) => void;
}

const ImageField: React.FC<ImageFieldProps> = ({ onImageUpload }) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);

      const imageURL = await getDownloadURL(storageRef);
      console.log("Image URL:", imageURL);
      onImageUpload(imageURL);
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
        className="hidden"
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
            onClick={() => {
              setImage(null);
              onImageUpload("");
            }}
          >
            <Close className="w-3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageField;
