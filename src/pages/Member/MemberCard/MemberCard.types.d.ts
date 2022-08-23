import { TMemberShip } from '@/services/api';

export type TMemberCardProps = {
  nextLevel?: TMemberShip;
  onClickLevelUpBtn?: () => void;
};
