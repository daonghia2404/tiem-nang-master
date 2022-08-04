export type TCategoriesEmotionProps = {
  data: TCategoriesData[];
};

export type TCategoriesData = {
  title: string;
  list: { label: string; icon: string }[];
};
