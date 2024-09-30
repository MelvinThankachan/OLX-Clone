import React, { useState } from "react";
import { db } from "../firebase/setup";
import { collection, addDoc } from "firebase/firestore";
import ImageField from "./ImageField";
import InputField from "./InputField";
import TextareaField from "./TextAreaField";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

export type FormData = {
  title: string;
  description: string;
  category: string;
  price: string;
  imageUrl: string;
};

const PostForm: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (url: string) => {
    setFormData((prevData) => ({ ...prevData, imageUrl: url }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, category, price, imageUrl } = formData;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title,
        description,
        category,
        price: Number(price),
        date: new Date(),
        userId: user?.uid,
        userName: user?.displayName,
        userImage: user?.photoURL,
        imageUrl,
      });
      console.log("Document written with ID: ", docRef.id);

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        imageUrl: "",
      });
      navigate(
        `/item/${docRef.id}/${slugify(title, { lower: true, strict: true })}`
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="content container max-w-screen-md">
      <form
        id="post-form"
        className="w-full flex flex-col"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center p-3">POST YOUR AD</h1>
        <div className="border-x ">
          <div className="form-section">
            <h1>ENTER DETAILS</h1>
            <InputField
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleChange}
            />
            <TextareaField
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleChange}
            />
            <InputField
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-section">
            <h1>SET A PRICE</h1>
            <InputField
              name="price"
              label="Price"
              value={formData.price}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div className="form-section">
            <h1>UPLOAD PHOTO</h1>
            <ImageField onImageUpload={handleImageUpload} />
          </div>
          <div className="form-section">
            <div>
              <button
                type="submit"
                className="p-3 rounded text-sm font-semibold bg-primary bg-opacity-10 transition-all duration-300 hover:bg-opacity-15"
              >
                Post now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
