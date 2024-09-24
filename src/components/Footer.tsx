import { footerImages, linksData } from "../misc/data";

const Footer = () => {
  return (
    <div>
      <div className="bg-secondary w-full ">
        <div className="p-4 flex justify-between max-w-7xl min-w-[1024px] mx-auto">
          {linksData.map((section) => (
            <div className="flex flex-col gap-3" key={section.heading}>
              <h1 className="font-bold text-sm">
                {section.heading.toUpperCase()}
              </h1>
              <div className="">
                {section.links.map((linkItem) => (
                  <div key={linkItem} className="h-min">
                    <span
                      key={linkItem}
                      className="w-auto text-xs text-gray-600 hover:text-primary cursor-pointer"
                    >
                      {linkItem}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary text-white fill-white py-5">
        <div className="p-4 flex justify-between max-w-7xl min-w-[1024px] mx-auto">
          {footerImages.map((image) => (
            <div key={image.src} className="flex items-center justify-center">
              <img
                src={image.src}
                className="footer-image cursor-pointer"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        <div className="p-4text-sm flex justify-between max-w-7xl min-w-[1024px] mx-auto">
          <span>
            Help - <span className="cursor-pointer">Sitemap</span>
          </span>
          <span>All rights reserved © 2006-2024 OLX</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
