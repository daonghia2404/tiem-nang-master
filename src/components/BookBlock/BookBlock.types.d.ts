export type TBookBlockProps = {
  name: string;
  image: string;
  images: string[];
  pathImage?: string;
  isQuoteBook?: boolean;
  onClick?: () => void;
};
