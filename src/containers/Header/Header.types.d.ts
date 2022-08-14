export type THeaderProps = unknown;

export type THeaderMenuData = {
  key: string | number;
  link: string;
  activePaths: string[];
  title: string;
  requireAuth?: boolean;
};
