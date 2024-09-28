import firebase from "firebase/compat/app";

export type IconProps = {
  className: string;
};

export type PostType = {
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

export type PostType2 = {
  id?: string;
  title: string;
  description: string;
  date: Date | firebase.firestore.Timestamp;
  price: number;
  userId: string;
  userName: string;
  categrory: string;
};
