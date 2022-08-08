import React from 'react';
import classNames from 'classnames';

import { TIconProps } from './Icon.types';
import { EIconName } from './Icon.enums';
import './Icon.scss';

import Search from './Search';
import Phone from './Phone';
import CloseSquare from './CloseSquare';
import Eye from './Eye';
import CaretDown from './CaretDown';
import Calendar from './Calendar';
import AngleLeft from './AngleLeft';
import AngleRight from './AngleRight';
import Check from './Check';
import Copy from './Copy';
import Info from './Info';
import Camera from './Camera';
import Play from './Play';
import Locker from './Locker';
import Pause from './Pause';
import Saved from './Saved';
import Unsaved from './Unsaved';
import Menu from './Menu';
import Next from './Next';
import Prev from './Prev';
import TimePastNext from './TimePastNext';
import TimePastPrev from './TimePastPrev';

const Icon: React.FC<TIconProps> = ({ name, className, color, onClick }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.Phone:
        return <Phone color={color} />;
      case EIconName.CloseSquare:
        return <CloseSquare color={color} />;
      case EIconName.Eye:
        return <Eye color={color} />;
      case EIconName.CaretDown:
        return <CaretDown color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.AngleLeft:
        return <AngleLeft color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.Check:
        return <Check color={color} />;
      case EIconName.Copy:
        return <Copy color={color} />;
      case EIconName.Info:
        return <Info color={color} />;
      case EIconName.Camera:
        return <Camera color={color} />;
      case EIconName.Locker:
        return <Locker color={color} />;
      case EIconName.Play:
        return <Play color={color} />;
      case EIconName.Pause:
        return <Pause color={color} />;
      case EIconName.Saved:
        return <Saved color={color} />;
      case EIconName.Unsaved:
        return <Unsaved color={color} />;
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.Next:
        return <Next color={color} />;
      case EIconName.Prev:
        return <Prev color={color} />;
      case EIconName.TimePastNext:
        return <TimePastNext color={color} />;
      case EIconName.TimePastPrev:
        return <TimePastPrev color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
