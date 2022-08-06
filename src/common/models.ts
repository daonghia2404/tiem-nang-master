export type TModel = unknown;

export type TProductFile = {
  createdAt: string;
  key: string;
  name: string;
  src: string;
  updatedAt: string;
  _id: string;
};

export type TProductVoice = {
  createdAt: string;
  description: string;
  duration: number;
  index: number;
  name: string;
  src: string;
  updatedAt: string;
  _id: string;
};

export type TProduct = {
  amount: number;
  author: string;
  available: boolean;
  avgContentRate: number;
  avgVoiceRate: number;
  category: string;
  createdAt: string;
  description: string;
  file: TProductFile[];
  filter: [];
  image: string;
  images: string[];
  isActivated: boolean;
  language: string;
  mood: string;
  name: string;
  numberOfPage: number;
  prePrice: number;
  price: number;
  publishingYear: number;
  reason: string;
  slug: string;
  soldCount: string;
  translator: string;
  type: string;
  updatedAt: string;
  viewCount: number;
  voice: TProductVoice[];
  __v: number;
  _id: string;
};

export type TCategory = {
  author: string;
  childs?: TCategory[];
  createdAt: string;
  description: string;
  enabled: boolean;
  lastEditor: string;
  name: string;
  order: number;
  parent: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
