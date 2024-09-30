import { Timestamp } from "firebase/firestore";

export type IconProps = {
  className: string;
};

export type PostType = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  date: Date;
  userId: string;
  userName: string;
  userImage: string;
  imageUrl: string;
};

export type Links = {
  heading: string;
  links: string[];
};

export const formatDate = (date: Timestamp | Date) => {
  date = date instanceof Timestamp ? date.toDate() : new Date(date);
  return new Intl.DateTimeFormat("en-IN").format(date);
};
