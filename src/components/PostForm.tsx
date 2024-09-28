import ImageField from "./ImageField";
import InputField from "./InputField";
import TextareaField from "./TextAreaField";

const PostForm = () => {
  return (
    <div className="content container max-w-screen-md">
      <form id="post-form" className="w-full flex flex-col">
        <h1 className="text-2xl font-bold text-center p-3">POST YOUR AD</h1>
        <div className="border-x ">
          <div className="form-section">
            <h1>ENTER DETAILS</h1>
            <InputField label="Title" value="" onChange={() => {}} />
            <TextareaField label="Description" value="" onChange={() => {}} />
          </div>
          <div className="form-section">
            <h1>SET A PRICE</h1>
            <InputField
              label="Price"
              onChange={() => {}}
              value=""
              type="text"
            />
          </div>
          <div className="form-section">
            <h1>UPLOAD PHOTO</h1>
            <ImageField />
          </div>
          <div className="form-section">
            <div>
              <button
                type="submit"
                form="post-form"
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
