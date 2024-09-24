import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-9xl font-bold pb-5">Oops!</h1>
        <p className="text-3xl font-medium max-w-[23ch]">
          We can't seem to find that. Try searching for it.
        </p>
        <div className="text-sm">
          <p className="text-gray-400">Error 404</p>
          <div className="flex gap-3">
            <span>Here are some helpful links:</span>
            <Link to="/">Home</Link>
            <Link to="#">Help</Link>
          </div>
        </div>
      </div>
      <img
        className="w-52 h-52"
        src="https://statics.olx.in/external/base/img/404.webp"
        alt="404"
      />
    </div>
  );
};

export default NotFound;
