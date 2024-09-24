export type IconProps = {
  className: string;
};

export type PostType
 = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Links = {
  heading: string;
  links: string[];
};
