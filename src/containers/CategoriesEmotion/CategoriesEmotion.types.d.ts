export type TCategoriesEmotionProps = {
  data: TCategoriesData[];
  ids?: (string | undefined)[];
  showLoadMore?: boolean;
  loading?: boolean;
  onClickItem?: (data: any) => void;
  onLoadMore?: () => void;
};

export type TCategoriesData = {
  title: string;
  list: { name: string; _id: string; iconPath?: string }[];
};
