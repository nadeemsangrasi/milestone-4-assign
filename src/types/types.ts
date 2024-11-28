import { StaticImageData } from "next/image";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
  stock: string;
  description: string;
  quantity: number;
}

export enum ButtonType {
  CART = "cart",
  DETAILS = "details",
  DELETE = "delete",
}

export interface IButtonProps {
  label: string;

  url?: string;

  className?: string;
}

export interface IBlogComment {
  id: string;
  author: string;
  date: string;
  content: string;
}
export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  imageURL: StaticImageData;
  detailImageURL: StaticImageData;
  comments: IBlogComment[];
}
