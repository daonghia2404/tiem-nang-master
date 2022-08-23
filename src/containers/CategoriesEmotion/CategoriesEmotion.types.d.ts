export type TCategoriesEmotionProps = {
  data: TCategoriesData[];
  ids?: (string | undefined)[];
  loading?: boolean;
  titleSticky?: boolean;
  onClickItem?: (data: any, index?: number) => void;
  onLoadMore?: () => void;
};

export type TCategoriesData = {
  title: string;
  list: { name: string; _id: string; iconPath?: string }[];
};
